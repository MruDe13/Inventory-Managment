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

function executeQuery(query){
    let db = getDbConnection();
    let queryResult = new Promise((res, rej) => {
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
                    console.log("Insert successful");
                }
            );
        });
    });

    return queryResult;
}
  
function fillRawMaterialStock(){
    
    for(let i=0; i<5000; i++){
        let rawMaterialName = generateString();
        let quantity = getRandomInt(100,10000);
        let minimumQuantity = getRandomInt(100,10000);

        
        let query = `Insert into rawmaterialstock (rawMaterialName,quantity,minimumQuantity) values ("${rawMaterialName}", ${quantity}, ${minimumQuantity});`;

        console.log(query);
        let result = executeQuery(query);
    }
}

function fillVendor(){
    for(let i=0; i<5000; i++){
        let vendorName = generateString();
        let address = generateString(50);
        let phoneNumber=getRandomInt(1000000000,9999999999);
        let ownerName = generateString();
        let query = `Insert into vendor (vendorName,address,phoneNumber,ownerName) values ("${vendorName}", "${address}", ${phoneNumber}, "${ownerName}");`;
        console.log(query);
        let result = executeQuery(query);
    }
}
//fillRawMaterialStock();
fillVendor();