const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('./configuration');
const path = require('path');

let db = null;

function getDbConnection(){
    if (db === null){
        //let completePath = `${path.join(__dirname, '../database/', DBCONFIG.DBNAME)}`
        let completePath = "C:\\Users\\Sachin Tripathi\\AppData\\Local\\Programs\\client\\database\\inventorymanagement.db"
        console.log('Creating Connection', completePath);
        db = new sqlite.Database(completePath, sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                console.log(err);
            }
            console.log('Connected to Inventory Management DB.');
        });
    }
    
    return db;
}

module.exports = { getDbConnection };
