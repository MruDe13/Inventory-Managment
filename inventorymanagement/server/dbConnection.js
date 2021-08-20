const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('./configuration');
const path = require('path');
const log = require("electron-log");

let db = null;

function getDbConnection(){
    if (db === null){
        let completePath = `${path.join(DBCONFIG.DBPATH, DBCONFIG.DBNAME)}`
        console.log('Creating Connection', completePath);

        db = new sqlite.Database(completePath, sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                log.error("MonsteR");
                log.error(err);
            } else{
                log.info('Connected to Inventory Management DB.');
            }
        });
    }
    
    return db;
}

module.exports =  {getDbConnection} ;
