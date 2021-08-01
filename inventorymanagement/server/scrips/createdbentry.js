const sqlite = require('sqlite3').verbose();
const DBCONFIG = require('../configuration');

let db = null;

function getDbConnection(){
    if (db === null){
        console.log('Creating Connection');
        db = new sqlite.Database(DBCONFIG.DBNAME, sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                console.log(err);
            }
            console.log('Connected to Inventory Management DB.');
        });
    }
    
    return db;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateString(len=15){
    let charArray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let randString = [];
    for(let i=0; i<len; i++){
        randString.push(charArray[getRandomInt(0,26)]);
    }
    let finalString ="";
    randString.map((_)=>{
        finalString = finalString + _;
    })
     
    return finalString;
}
  
function fillItemTable(){
    console.log(generateString());
}
fillItemTable();