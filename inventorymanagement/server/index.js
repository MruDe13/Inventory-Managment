// Library imports
const express = require('express');
const app = express();
const log = require('electron-log');
const path = require('path');

//Database imports
const DB = require('./dbConnection');
const DBCONFIG = require('./configuration');
const runInitialSetup = require('./scripts/initialSetup');


//Route imports
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


//Setup logger
const logFile = path.join(DBCONFIG.DBPATH, DBCONFIG.LOGNAME) ;
console.log("Log Path is:" , logFile);
log.transports.file.resolvePath = () => logFile;
log.transports.file.level = "debug";

function setupCORS(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type');
    next();
}

async function connectToDB(){
    log.info("Connect to db");
    try{
        let dbConnection = await DB.getDbConnection();
        return true;
    }catch(error){
        log.error("Error while connecting to database. Attempting to create new database");
        try{
            await runInitialSetup();
            return true;
        }catch{
            return false;
        }
    }
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

log.info("Starting server!!");

const server = app.listen(globalConfig.SERVER_PORT, ()=>{
  log.info('running on port', globalConfig.SERVER_PORT);
})

connectToDB().then((dbConnectionstatus)=>{
    if(!dbConnectionstatus){
        log.error("Unable to create Database connection!! Closing the server BYE BYE :(");
    //    server.close();
    }else{
        // Initialize search service
        mSearchManager.initializeSearch(['Item']);
    }
});





module.exports = app;
