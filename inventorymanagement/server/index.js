const express = require('express');
const app = express();
const rawmaterialTableRoute = require('./routes/rawmaterialtable');
const purchaseTableRoute = require('./routes/purchasetable');
const productTableRoute = require('./routes/producttable');
const vendorTableRoute = require('./routes/vendortable');

const searchRoute = require('./routes/search');
const mSearchManager = require('./feature/')

// Initialize search service
mSearchManager.initializeSearch(['Item']);
// const updateTableRoute = require('./routes/updatetable');
const salesTableRoute = require('./routes/salestable');
const customerTableRoute = require('./routes/customertable');

function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
}

app.all('/*', setupCORS);
app.use(express.json());
app.use('/rawmaterialtable', rawmaterialTableRoute); //1
app.use('/purchasetable', purchaseTableRoute); //2
app.use('/salestable', salesTableRoute); //3
app.use('/vendortable', vendorTableRoute); //4
app.use('/producttable', productTableRoute); //5
// app.use('/paymenttable', paymentTableRoute); //6
app.use('/customertable', customerTableRoute); //7
//app.use('/update', updateTableRoute);
app.use('/search', searchRoute);



app.listen(3001, ()=>{
  console.log('running on port 3001');
})

module.exports = app;
