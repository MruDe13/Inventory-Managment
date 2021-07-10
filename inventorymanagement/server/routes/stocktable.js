const express = require('express');
const route = express.Router();
const DB = require('../dbConnection');


route.get('/', (req, res)=>{
    let db = DB.getDbConnection();
    let data = [];
    let query = `SELECT Item.name as "Item", Item.remarks as "Remark", total_purchased as "Purchased", available as "Available" from Raw_Material_StockBook INNER JOIN Item WHERE Raw_Material_StockBook.Item_id = Item.id;`;

    db.serialize(() => {
        db.each(query, (err, details) => {
          if (err) {
            console.error(err);
          }
          console.log(details);
          data.push(details);  
        }, ()=>{
          res.send(JSON.stringify(data))
        });
      });
})


route.post('/', (req,res)=>{
    let db = DB.getDbConnection();


})

module.exports = route

