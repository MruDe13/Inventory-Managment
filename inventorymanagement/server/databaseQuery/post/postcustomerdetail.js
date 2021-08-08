const DB = require('../../dbConnection');

async function postCustomerDetail(request){
    
    let db = DB.getDbConnection();
    let query = `INSERT INTO customer (customerName, phoneNumber, email, address, panNumber, gstNumber, ownerName, paymentDays) VALUES ("${request.customerName}", ${Number(request.phoneNumber)}, "${request.email}", "${request.address}", "${request.panNumber}", "${request.gstNumber}", "${request.ownerName}", ${Number(request.paymentDays)}) `;

    let response = new Promise((res,rej)=>{
        console.log(query)
        db.exec(query, (err)=>{
            if (err){
                return rej("Couldn't Add Customer!")
            }
            res("Successfully Added The Customer!")
        })
    })

    return response;
}


module.exports = postCustomerDetail;

