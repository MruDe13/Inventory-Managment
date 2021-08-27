const execGetQuery = require('../utils/execGetQuery');

async function getProductDetail(){

    let query = `SELECT producttransaction.id as Transaction ID, productid as "Product", date, producttransaction.quantity as "Transaction Qty", producttransaction.remarks as "Transaction Remark" FROM producttransaction INNER JOIN product ON product.id = producttransaction.productid;`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Production detail");
    }

    return response;
}

module.exports = getProductDetail;
