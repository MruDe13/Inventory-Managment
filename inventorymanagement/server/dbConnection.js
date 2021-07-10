const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('./configuration');

let db = null;

function getDbConnection(){
    if (db === null){
        console.log('Creating Connection');
        if(DBCONFIG.MODE === 'TEST'){
                
        }
        db = new sqlite.Database(DBCONFIG.DBNAME, sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                console.log(err);
            }
            console.log('Connected to Inventory Management DB.');
        });
    }
    
    return db;
}

module.exports = { getDbConnection };
