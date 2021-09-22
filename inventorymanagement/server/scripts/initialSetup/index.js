const dbConnection = require('../../dbConnection');
const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('../../configuration');
const path = require('path');
const log = require("electron-log");

function createDBFile(){
    let connectionPromise = new Promise((resolve, reject)=>{
        let completePath = `${path.join(DBCONFIG.DBPATH, DBCONFIG.DBNAME)}`
        log.warn('Creating database file at path ', completePath);

        let db = new sqlite.Database(completePath, sqlite.OPEN_CREATE|sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                log.error("Error while creating database file", err);
                reject("Connection failed");
            } else{
                log.info('Created Inventory Management Database file');
                resolve(db)
            }
        });
    });

    return connectionPromise;
}

function createTables(dbHandle){
    log.info("Creating tables!!");
    let db = dbHandle;
    let allPromise = DBCONFIG.TABLES.map(query=>{
        let queryStatus = new Promise((res, rej) =>{
            db.serialize(() => {
                db.each(
                    query,
                    (err, details) => {
                        if (err) {
                            console.error(err);
                            rej(JSON.stringify(err));
                        }
                    },
                    () => {
                        log.info("Create table successful");
                        res("Creation successful");
                    }
                );
            });
        })
        return queryStatus
    });

    return allPromise;
}

async function initialSetup(){
    log.info("Creating new database file");
    let initialSetupSuccess = false;

    try{
        const dbHandle = await createDBFile();
        if(dbHandle){
            let createTablePromises = createTables(dbHandle);
            singlePromsise = await Promise.all(createTablePromises);
            log.info("Tables created");
            initialSetupSuccess = true;
        }else{
            log.error("!!!!!!!!!!!!!Unknown error occured while setting up database!!!!!!!!!!!!!!!");
        }    
    }catch(error){
        log.error("!!!!!!!!!!!!!Error occured while setting up database!!!!!!!!!!!!!!!", error);
    }

    return initialSetupSuccess;
}

module.exports = initialSetup;