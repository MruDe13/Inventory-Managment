const DB = require('../dbConnection');

async function checkItemDuplicate(request){
    let db = DB.getDbConnection();
    let query1 = `SELECT id FROM Item WHERE name="${request.name}"`;
    let duplicate = new Promise((res,rej)=>{
        db.get(query1,(err, id )=>{
            if (err || id===undefined){
                return res(false);
            }
            return res(true);
        })
    })
    return duplicate
}

module.exports = { checkItemDuplicate }

