const execPostQuery = require('../utils/execPostQuery');

async function postProductDetail(request){

    let query = `INSERT INTO product (productName, minimumQuantity, remarks, type, quantity) VALUES ("${request.productName}", ${Number(request.minimumQuantity)}, "${request.remarks}", "${request.type}", ${Number(0)})`;
    let queryResponse = null;

    try{
        queryResponse = await execPostQuery(query);
    } catch(error){
        console.error("Inserting product detail failed");
        queryResponse = "Failed!"
    }
    
    return queryResponse;
}


module.exports = postProductDetail;

