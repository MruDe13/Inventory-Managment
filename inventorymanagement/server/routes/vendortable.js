const express = require('express');
const route = express.Router();
const DB = require('../dbConnection');

route.get('/', (req, res)=>{
    let db = DB.getDbConnection();
    let query = `SELECT id as "ID", name as "Name", owner_name as "Owner", address as "Address", phone_number as "Contact" from Vendor_Details;`

    let data = [];
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
  db.exec(`INSERT INTO Vendor_Details (name, owner_name, address, email, pan_number, phone_number, gst_number) VALUES ("${request.name}", "${request.owner_name}", "${request.address}"," ${request.email}", "${request.pan_number}", ${Number(request.phone_number)}, "${request.gst_number}")`, (err)=>{
    if (err===null){
      console.log("Success!");
    } else {
      console.log("Failed: " + err)
    }
  })
})


module.exports = route

