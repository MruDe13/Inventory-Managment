const express = require('express');
const route = express.Router();
const DB = require('../dbConnection');


route.get('/', (req, res)=>{
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT DISTINCT name FROM Item`

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
    let request = req.body;

    if(request.name=== ''){
      res.send({Error: 'Invalid Item Name'})
    } else {
      let query = `INSERT INTO Item (name, remarks) VALUES ("${request.name}", "${request.remarks}");`
      db.exec(query, (err)=>{
        if (err===null){
          console.log("Success!");
          res.send({RES: "Success"});
          let id;
          db.get(`SELECT id FROM Item WHERE name="${request.name}" AND remarks="${request.remarks}"`, (err, itemid)=>{
            console.log(itemid);
            id = itemid.id;
            db.exec(`INSERT INTO Raw_Material_StockBook (item_id, total_purchased, available) VALUES (${Number(id)}, ${0}, ${0})`, (err)=>{
              if (err){
                console.log(err);
              }
            })
          })
          
        } else {
          console.log("Failed: " + err)
        }
      })
    }

    
})

module.exports = route

