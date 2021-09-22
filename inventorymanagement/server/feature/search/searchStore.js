const queries  = require("./queries")
const getItemsToFillStore = queries.getItemsToFillStore;
const getItemsFromTable = queries.getItemsFromTable;

class SearchStore{
    constructor(tableName, colName){
        this.tableName = tableName; //Table name
        this.store = new Map();
        this.colName = colName; //Name of the column for which we create map
    }
  
    createIndex(items){
        items.forEach(element => {
            let name = element.rawMaterialName;
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
        console.log("Fill store called ", this.tableName, this.colName);
        let items = await getItemsToFillStore(this.tableName, this.colName);
        this.createIndex(items);
    }

    getDataFromTable(){

    }

    async search(query){
        let data = []
        let ids = this.store.get(query);
        if(ids && ids.length > 0){
            data = await getItemsFromTable(ids, this.tableName, this.colName);
        }
        return data;
    }

}

module.exports = SearchStore;