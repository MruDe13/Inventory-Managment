const searchIndexConfig = require('./conf');
const SearchStore = require('./searchStore');
class SearchManager{
    constructor(){
        /*
            Map(
                tableName1: {
                    colName1: SearchStore
                    colName2: SearchStore
                    ...
                },
                tableName2: {
                    colName: SearchStore
                },
            )
        */
        this.searchContext = new Map(); // this map has entry each context as key and SearchStore as val
    }

    initializeSearch(forceCreateStore = false){
        console.log("Start searchManager");
        if(forceCreateStore || this.searchContext.size === 0){
            this.dbTables = Object.keys(searchIndexConfig); //Context is an array of table which search service should index to server its query.
        
            for(let i=0; i<this.dbTables.length; i++){
                let colsToIndex = searchIndexConfig[this.dbTables[i]];
                
                for(let j=0; j<colsToIndex.length; j++){
                    const colName = colsToIndex[j]
                    let mSearchStore = new SearchStore(this.dbTables[i], colName);
                    mSearchStore.fillStore();
                    if (this.searchContext.has(this.dbTables[i])){
                        let val = this.searchContext.get(this.dbTables[i]);
                        val[colName] = mSearchStore;
                    }else{
                        this.searchContext.set(this.dbTables[i], {colName: mSearchStore});
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
    async search(tableName, colName, searchParam){
        console.log('Params received at SearchManager', tableName, colName, searchParam);
        let searchStore = this.searchContext.get(tableName)?.colName;
        
        searchStore?.search(searchParam).then(searchResult=>{
            console.log("SearchResult ", searchResult);
            return searchResult.flat();
        })
    }
}

module.exports = new SearchManager();

