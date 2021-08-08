const DB = require('../../dbConnection');

async function postVendorDetail(request){
    let db = DB.getDbConnection();
    let query = `INSERT INTO vendor (vendorName, phoneNumber, email, address, panNumber, gstNumber, ownerName, paymentDays) VALUES ("${request.vendorName}", ${Number(request.phoneNumber)}, "${request.email}", "${request.address}", "${request.panNumber}", "${request.gstNumber}", "${request.ownerName}", ${Number(request.paymentDays)}) `;

    let response = new Promise((res,rej)=>{
        console.log(query)
        db.exec(query, (err)=>{
            if(err){
                rej("Failed! Please try again.")
            }
            res("Successful!")
        })
    })

    return response;
}


module.exports = postVendorDetail;

