const DB = require('../dbConnection');

async function postVendorDetail(request){
    let db = DB.getDbConnection();
    let query = `INSERT INTO Vendor_Details (name, owner_name, address, email, pan_number, phone_number, gst_number) VALUES ("${request.name}", "${request.owner_name}", "${request.address}"," ${request.email}", "${request.pan_number}", ${Number(request.phone_number)}, "${request.gst_number}")`;

    let response = new Promise((res,rej)=>{
        db.exec(query, (err)=>{
            if (err){
              return rej(JSON.stringify(err))
            }
            res("Successfully Saved!")
        })
    })
    return response;
}

module.exports = { postVendorDetail }