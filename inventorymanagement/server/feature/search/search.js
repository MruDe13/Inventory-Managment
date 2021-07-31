const queries  = require("./queries")
const colToIndexConfig = require('./conf');

const getItemsToFillStore = queries.getItemsToFillStore;
const getItemsFromTable = queries.getItemsFromTable;

class SearchStore{
    constructor(context, colToIndex){
        this.context = context;
        this.store = new Map();
        this.colToIndex = colToIndex;
    }
  
    createIndex(items){
        items.forEach(element => {
            let name = element.name;
            for(let i=0; i<=name.length; i++){
                let key = name.substring(0, i);
                if(this.store.has(key)){
                    let val = this.store.get(key);
                    val.push(element.id);
                }else{
                    let val = [element.id];
                    this.store.set(key, val);
                }
            }
        });
    }

    async fillStore(){
        console.log("Fill store called ", this.context, this.colToIndex);
        let items = await getItemsToFillStore(this.context, this.colToIndex);
        this.createIndex(items);
    }

    getDataFromTable(){

    }

    async search(query){
        let ids = this.store.get(query);
        let data = await getItemsFromTable(ids, this.context, this.colToIndex);
        return data;
    }

}

class SearchManager{
    constructor(){
        console.log("Start searchManager");
        this.searchContext = new Map(); // this map has entry each context as key and SearchStore as val
    }

    initializeSearch(context, forceCreateStore = false){
        if(forceCreateStore || this.searchContext.size === 0){
            this.context = context;//Context is an array of table which search service should index to server its query.
            
            for(let i=0; i<this.context.length; i++){
                let colToIndex = colToIndexConfig[this.context[i]   ];
                
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
        }else{
            return false;
        }
    }

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