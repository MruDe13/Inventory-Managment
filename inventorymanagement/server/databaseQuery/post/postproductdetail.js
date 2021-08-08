const DB = require('../../dbConnection');

async function postProductDetail(request){
    let db = DB.getDbConnection();
    let query = `INSERT INTO product (productName, minimumQuantity, remarks, type, quantity) VALUES ("${request.productName}", ${Number(request.minimumQuantity)}, "${request.remarks}", "${request.type}", ${Number(0)})`;

    let response = new Promise((res,rej)=>{
        db.exec(query, (err)=>{
            if(err){
                return rej("Couldn't Add Product!")
            }
            res("Successfully Added Product!")
        })
    })

    return response;
}


module.exports = postProductDetail;

