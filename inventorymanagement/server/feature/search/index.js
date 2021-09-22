const colToIndexConfig = require('./conf');
const SearchStore = require('./searchStore');
class SearchManager{
    constructor(){
        this.searchContext = new Map(); // this map has entry each context as key and SearchStore as val
    }

    initializeSearch(context, forceCreateStore = false){
        console.log("Start searchManager");
        if(forceCreateStore || this.searchContext.size === 0){
            this.context = context; //Context is an array of table which search service should index to server its query.
            
            for(let i=0; i<this.context.length; i++){
                let colToIndex = colToIndexConfig[this.context[i]];
                
                for(let j=0; j<colToIndex.length; j++){
                    let mSearchStore = new SearchStore(this.context[i], colToIndex);
                    mSearchStore.fillStore();
                    if (this.searchContext.has(this.context[i])){
                        let val = this.searchContext.get(this.context[i]);
                        val.push(mSearchStore);

                    }else{
                        this.searchContext.set(this.context[i], [mSearchStore]);
                    }
                }
            }
            return true;
        } else{
            return false;
        }
    }

    /* 
        Called by search API to get input 
    */
    async search(context, searchParam){
        console.log('Params received at SearchManager', context, searchParam);
        let searchStore = this.searchContext.get(context);
        
        let searchResultPromise = searchStore.map((store)=>{
            return store.search(searchParam);
        });

        return Promise.all(searchResultPromise).then((searchResult)=>{
            console.log("SearchResult ", searchResult);
            return searchResult.flat();
        })
    }
}

module.exports = new SearchManager();