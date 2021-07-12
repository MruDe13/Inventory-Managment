const express = require('express');
const app = express();
const checkFields =  require('./checkinputs/checkfields.js');
const itemTableRoute = require('./routes/itemtable');
const purchaseTableRoute = require('./routes/purchasetable');
const stockTableRoute = require('./routes/stocktable');
const vendorTableRoute = require('./routes/vendortable');

app.all('/*', setupCORS);

function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
}

app.use(express.json());
app.use('/itemtable', itemTableRoute);
app.use('/purchasetable', purchaseTableRoute);
app.use('/stocktable', stockTableRoute);
app.use('/vendortable', vendorTableRoute);

app.listen(3001, ()=>{
  console.log('running on port 3001');
})


app.post('/updatepurchase',(req,res)=>{
  console.log('Update  Called.');
  let request = req.body;
  console.log(request)
  checkFields.checkFields(request);

  db.serialize(()=>{
    db.get(`Select id from Vendor_Details where name="${request['Vendor Name']}"`,(err, vendor_id )=>{
      request['Vendor Name'] = vendor_id;
      console.log(request['Vendor Name'])

      if (err){
        return res.send("Vendor not registered.")
      }
      db.get(`Select id from Item where name="${request['Item Name']}"`,(err, item_id )=>{
        request['Item Name'] = item_id;
        console.log(request['Item Name'])

        if (err){
          return res.send("Item not registered.")
        }

        let query = `UPDATE Purchase_Book SET vendor_id = ${request['Vendor Name'].id}, item_id = ${request['Item Name'].id}, quantity = ${Number(request.Quantity)}, bill_amount = ${Number(request['Bill Amount'])}, paid_amount = ${Number(request['Paid Amount'])}, date = "${request.Date}", bill_number = "${request['Bill Number']}", delivery_status = "${request['Delivery Status']}" WHERE id= ${request.id};`

        console.log(query);
        db.run(query,(err)=>{
            if (err===null){
              console.log("Success!");
            } else {
              console.log("Failed: " + err)
            }
        });
      });
    });
  })
})


