const sqlite = require('sqlite3').verbose();
const DB_PATH = ""
const DB_NAME = "inventorymanagement.db";

const tablesList = [
    "CREATE TABLE vendor (id INTEGER PRIMARY KEY AUTOINCREMENT, vendorName TEXT, address TEXT, phoneNumber INTEGER, email TEXT, panNumber TEXT, gstNumber TEXT, ownerName TEXT, paymentDays INTEGER);",

    "CREATE TABLE sqlite_sequence(name,seq);",

    "CREATE TABLE rawmaterialstock (id INTEGER PRIMARY KEY AUTOINCREMENT, rawMaterialName TEXT, type TEXT, remarks TEXT, quantity INTEGER, minimumQuantity INTEGER);",
    
    "CREATE TABLE purchase (id INTEGER PRIMARY KEY AUTOINCREMENT, vendorid INTEGER REFERENCES vendor (id), rawmaterialid INTEGER REFERENCES rawmaterialstock (id), billNumber TEXT, quantity INTEGER, totalCost INTEGER, amountPaid INTEGER, damagedQuantity INTEGER, date TEXT);",
    
    "CREATE TABLE product (id INTEGER PRIMARY KEY AUTOINCREMENT, productName TEXT, type TEXT, remarks TEXT, quantity INTEGER, minimumQuantity INTEGER);",
    
    "CREATE TABLE producttransaction (id INTEGER PRIMARY KEY AUTOINCREMENT, productid INTEGER REFERENCES product (id), date DATETIME, quantity INTEGER, remarks Text);",
    
    "CREATE TABLE customer (id INTEGER PRIMARY KEY AUTOINCREMENT, customerName TEXT, ownerName TEXT, phoneNumber INTEGER, address TEXT, email TEXT, gstNumber TEXT, panNumber TEXT, paymentDays INTEGER);",
    
    "CREATE TABLE sales (id INTEGER PRIMARY KEY AUTOINCREMENT, customerid INTEGER REFERENCES customer (id), productid INTEGER REFERENCES product (id), date DATETIME, quantity INTEGER, billAmount INTEGER, discountPercent INTEGER, discountAmount INTEGER, totalAmount INTEGER, amountReceived INTEGER, billNumber Text);",
    
    "CREATE TABLE salespayment (id INTEGER PRIMARY KEY AUTOINCREMENT, customerid INTEGER REFERENCES customer (id), date DATETIME, amountReceived INTEGER);",
    
    "CREATE TABLE purchasepayment (id INTEGER PRIMARY KEY AUTOINCREMENT, vendorid INTEGER REFERENCES vendor (id), date DATETIME, amountPaid INTEGER);"
];

function createDbConnection(){
    let db = null;
    if (db === null){
        console.log('Creating Connection');
        db = new sqlite.Database(DB_NAME, sqlite.OPEN_CREATE|sqlite.OPEN_READWRITE, (err)=>{
            if (err) {
                console.log(err);
            }
            console.log('Connected to Inventory Management DB.');
        });
    }
    
    return db;
}

function addTables(){
    let db = createDbConnection();
    let allPromise = tablesList.map(query=>{
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
                        console.log("Create table successful");
                        res("Creation successful");
                    }
                );
            });
        })
        return queryStatus
    });

    return allPromise;
}

function createTables(){
    console.log("Starting to create tables")
    //let db = createDbConnection();
    let queryStatus = addTables();
    Promise.all(queryStatus).then(
        (values)=>{
            console.log("Successfully created tables")
        });
}

createTables();