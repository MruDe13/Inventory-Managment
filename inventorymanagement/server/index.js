const express = require('express');
const app = express();
const rawmaterialTableRoute = require('./routes/rawmaterialtable');
const purchaseTableRoute = require('./routes/purchasetable');
const productTableRoute = require('./routes/producttable');
const vendorTableRoute = require('./routes/vendortable');
const productionTableRoute = require('./routes/productiontable');
const searchRoute = require('./routes/search');
const mSearchManager = require('./feature/')
const globalConfig = require('./config');
// const updateTableRoute = require('./routes/updatetable');
const salesTableRoute = require('./routes/salestable');
const customerTableRoute = require('./routes/customertable');
const DB = require('./dbConnection');
const DBCONFIG = require('./configuration');
const log = require('electron-log');
const path = require('path');
const logFile = path.join(DBCONFIG.DBPATH, DBCONFIG.LOGNAME) ;
console.log("Log Path is:" , logFile);
log.transports.file.resolvePath = () => logFile;
log.transports.file.level = "debug";

// Initialize search service
mSearchManager.initializeSearch(['Item']);

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
app.use('/productiontable', productionTableRoute);
//app.use('/update', updateTableRoute);
app.use('/search', searchRoute);

log.info("Try to start server");
app.listen(globalConfig.SERVER_PORT, ()=>{
  log.info('running on port', globalConfig.SERVER_PORT);
})

if (!DB.getDbConnection()){
  window.alert("Couldn't connect to Database.")
}

module.exports = app;
