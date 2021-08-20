const execGetQuery = require('../utils/execGetQuery');

async function getProductDetail(){

    let query = `SELECT * FROM production`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Production detail");
    }

    return response;
}

module.exports = getProductDetail;
