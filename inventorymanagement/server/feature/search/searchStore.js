const queries  = require("./queries")
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

module.exports = SearchStore;