const DB = require('../../dbConnection');

async function postRawMaterialDetail(request){
    
    let db = DB.getDbConnection();
    let query = `INSERT INTO rawmaterialstock (rawMaterialName, minimumQuantity, remarks, type, quantity) VALUES ("${request.rawMaterialName}", ${Number(request.minimumQuantity)}, "${request.remarks}", "${request.type}", ${Number(0)})`;

    let response = new Promise((res,rej)=>{
        db.exec(query, (err)=>{
            if (err){
                return rej("Failed! Please try again.")
            }
            res("Successful!")
        })
    })

    return response;
}


module.exports = postRawMaterialDetail;

