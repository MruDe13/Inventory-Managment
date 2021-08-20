const execPostQuery = require('../utils/execPostQuery');

async function postRawMaterialDetail(request){
    
    let query = `INSERT INTO rawmaterialstock (rawMaterialName, minimumQuantity, remarks, type, quantity) VALUES ("${request.rawMaterialName}", ${Number(request.minimumQuantity)}, "${request.remarks}", "${request.type}", ${Number(0)})`;
    let queryResponse = null;

    try{
        queryResponse = await execPostQuery(query);
    } catch(error){
        console.error("Inserting raw material detail failed", error);
        queryResponse = "Failed!"
    }
    
    return queryResponse;
}


module.exports = postRawMaterialDetail;

