const path = require("path")

module.exports = {
    MODE: 'TEST',
    DBNAME: "inventorymanagement.db",
    LOGNAME: "main.log",
    DBPATH: path.join(process.env.APPDATA,"..\\Local\\InventoryManagement")
}