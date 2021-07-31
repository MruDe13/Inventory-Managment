const DB = require('../dbConnection');

async function getStockDetail(){
    let db = DB.getDbConnection();
    let data = [];
    let query = `SELECT Item.name as "Item", Item.remarks as "Remark", total_purchased as "Purchased", available as "Available" from Raw_Material_StockBook INNER JOIN Item WHERE Raw_Material_StockBook.Item_id = Item.id;`;
    let response = new Promise((res, rej)=>{
        db.serialize(() => {
            db.each(query, (err, details) => {
              if (err) {
                return rej(JSON.stringify(err));
              }
              data.push(details);  
            }, ()=>{
              res(data)
            });
        });
    })
    return response;
}

module.exports = getStockDetail

