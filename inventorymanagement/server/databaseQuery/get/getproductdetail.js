const execGetQuery = require('../utils/execGetQuery');

async function getProductDetail(){
    let query = `SELECT * FROM product`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Product detail");
    }
    
    return response;
}

module.exports = getProductDetail;
