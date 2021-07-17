const express = require('express');
const app = express();
const itemTableRoute = require('./routes/itemtable');
const purchaseTableRoute = require('./routes/purchasetable');
const stockTableRoute = require('./routes/stocktable');
const vendorTableRoute = require('./routes/vendortable');
const updateTableRoute = require('./routes/updatetable');

function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
}

app.all('/*', setupCORS);
app.use(express.json());
app.use('/itemtable', itemTableRoute);
app.use('/purchasetable', purchaseTableRoute);
app.use('/stocktable', stockTableRoute);
app.use('/vendortable', vendorTableRoute);
app.use('/update', updateTableRoute);

app.listen(3001, ()=>{
  console.log('running on port 3001');
})

module.exports = app;