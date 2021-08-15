const DB = require('../dbConnection');

async function checkVendorDuplicate(request){
    let db = DB.getDbConnection();
    let query1 = `SELECT id FROM Vendor_Details WHERE name="${request.name}" AND owner_name="${request.owner_name}"`;
    let duplicate = new Promise((res,rej)=>{
        db.get(query1,(err, id )=>{
            if (err || id===undefined){
                return res(false);
            }
            return res(true);
        })
    })
    return duplicate
}

module.exports = { checkVendorDuplicate }

