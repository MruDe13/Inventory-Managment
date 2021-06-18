const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();


const db = new sqlite.Database("D:\\Database\\SQlite\\InventoryManagement.db", sqlite.OPEN_READWRITE, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('Connected to Inventory Management DB.');
})


let data = [];
db.serialize(() => {
    db.each(`SELECT * from StockBook`, (err, details) => {
      if (err) {
        console.error(err.message);
      }
      console.log(details.Vendor);
      data.push(details);
      
    });
  });

app.get('/', (req,res) => {
    
      res.send(`
      [${data[0].Vendor}]
  `)
;
})


app.listen(3001, ()=>{
    console.log('running on port 3001');
})