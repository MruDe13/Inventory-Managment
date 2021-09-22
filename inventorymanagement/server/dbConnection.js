const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('./configuration');
const path = require('path');
const log = require("electron-log");

let db = null;

function getDbConnection(){
    let connectionPromise = new Promise((resolve, reject)=>{
        if (db === null){
            let completePath = `${path.join(DBCONFIG.DBPATH, DBCONFIG.DBNAME)}`
            console.log('Creating Connection', completePath);
    
            db = new sqlite.Database(completePath, sqlite.OPEN_READWRITE, (err)=>{
                if (err) {
                    log.error("Unable to create DB connnection", err);
                    reject("Connection failed");
                } else{
                    log.info('Connected to Inventory Management DB.');
                    resolve(db)
                }
            });
        }else{
            resolve(db);
        }    
    });

    return connectionPromise;
}

function getDbHandle(){
    return db;
}

module.exports =  {getDbConnection, getDbHandle} ;
