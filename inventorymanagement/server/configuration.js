const path = require("path")

module.exports = {
    MODE: 'TEST',
    DBNAME: "inventorymanagement.db",
    LOGNAME: "main.log",
    DBPATH: path.join(process.env.APPDATA,"..\\Local\\InventoryManagement"),
    TABLES:[
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
    ]
}