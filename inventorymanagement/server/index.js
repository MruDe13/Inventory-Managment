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




// app.get('/vendor',(req, res)=>{
//   console.log("vendor called");
//   let data = [];
//   db.serialize(() => {
//     db.each(`SELECT ${info} from ${tableName}`, (err, details) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(details);
//       data.push(details);  
//     });
//   });
// },()=>{
//   res.send(data)
// });

app.post('/vendor', (req, res)=> {
  console.log("Post Method called on server side.");
  console.log(req.body);
  res.send('Post Method Called.')
})

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

app.post('/purchasedetail', (req,res)=>{
    
  let request = req.body;
  if (request.name === ""){
    return res.status(404).send({Error: "Enter a Valid vendor name."})
  }
  if (request.item === ""){
    return res.status(404).send("Enter a Valid Item name.")
  }
  if (request.quantity === ""){
    return res.send("Enter a valid Quantity")
  }
  if (request.bill_amount === 0){
    return res.send("Bill Amount cannot be 0.")
  }
  if (request.paid_amount === null){
    request.paid_amount = 0;
  }
  if (request.date === null){
    return res.send("Enter a valid date.")
  }
  if (request.bill_number === null){
    request.bill_number = "N/A";
  }
  if (request.delivery_status === null){
    request.delivery_status = "Not Delivered";
  }
  if (request.delivery_quantity === null){
    request.delivery_quantity = 0;
  }

  console.log(request);

  db.serialize(()=>{
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
})
  


app.get('/vendorlist', (req,res)=>{
  let data = [];
  db.serialize(() => {
    db.each(`SELECT id, name, owner_name, address, phone_number from Vendor_Details;`, (err, details) => {
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

app.post('/vendordetail', (req,res)=>{
  let request = req.body;
  db.exec(`INSERT INTO Vendor_Details (name, owner_name, address, email, pan_number, phone_number, gst_number) VALUES ("${request.name}", "${request.owner_name}", "${request.address}"," ${request.email}", "${request.pan_number}", ${Number(request.phone_number)}, "${request.gst_number}")`, (err)=>{
    if (err === null){
      console.log("Success!");
    } else {
      console.log("Failed: " + err)
    }
  })
})

app.post('/itemtable', (req,res)=>{
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

app.get('/purchaselist', (req,res)=>{
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


app.get('/', (req,res) => {
  console.log('Get request');
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
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



app.listen(3001, ()=>{
    console.log('running on port 3001');
})