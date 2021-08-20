const execGetQuery = require('../utils/execGetQuery');

async function getRawMaterialDetail(){

    let query = `SELECT * FROM rawmaterialstock`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch RawMaterial detail");
    }

    return response;
}

module.exports = getRawMaterialDetail;

