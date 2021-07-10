const express = require('express');
const route = express.Router();
const DB = require('../dbConnection');


route.get('/', (req, res)=>{
    let db = DB.getDbConnection();
    let data = [];
    db.serialize(() => {
      db.each(`select Purchase_Book.id, Vendor_Details.name as "Vendor Name", Item.name as "Item Name",quantity as "Quantity", bill_amount as "Bill Amount", paid_amount as "Paid Amount", date as "Date", bill_number as "Bill Number", delivery_status as "Delivery Status" from Purchase_Book inner join Vendor_Details on Vendor_Details.id = Purchase_Book.vendor_id inner join Item on Item.id = Purchase_Book.item_id;`, (err, details) => {
        if (err) {
          console.error(err.message);
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
    db.get(`Select id from Vendor_Details where name="${request.name}"`,(err, vendor_id )=>{
        request.name = vendor_id;
        console.log(request.name)

        if (err){
        return res.send("Vendor not registered.")
        }
        db.get(`Select id from Item where name="${request.item}"`,(err, item_id )=>{
        request.item = item_id;
        console.log(request.item)

        if (err){
            return res.send("Item not registered.")
        }
    
        db.exec(`Insert into Purchase_Book (vendor_id, item_id, quantity, bill_amount, paid_amount, date, bill_number, delivery_status, delivery_quantity) values (${request.name.id},${request.item.id},${Number(request.quantity)},${Number(request.bill_amount)}, ${Number(request.paid_amount)},"${request.date}", "${request.bill_number}", "${request.delivery_status}", ${Number(request.delivery_quantity)});`,(err)=>{
            if (err===null){
                console.log("Success!");
                db.get(`SELECT id, total_purchased, available FROM Raw_Material_StockBook WHERE item_id=${request.item.id}`, (err, itemdetails)=>{
                let updatedTotal = Number(request.quantity) + Number(itemdetails.total_purchased);
                let updatedAvailable = Number(request.quantity) + Number(itemdetails.available);
                db.exec(`UPDATE Raw_Material_StockBook SET total_purchased= ${updatedTotal}, available=${updatedAvailable} WHERE id=${itemdetails.id}`)
                })
                res.send('Saved!')
            } else {
                res.send('Failed')
                console.log("Failed: " + err)
            }
        });
        });
    });
      

    
})

module.exports = route

