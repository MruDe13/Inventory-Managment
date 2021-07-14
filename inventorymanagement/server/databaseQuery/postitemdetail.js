const DB = require('../dbConnection');

async function postItemDetail(request){
    let db = DB.getDbConnection();
    let query = `INSERT INTO Item (name, remarks) VALUES ("${request.name}", "${request.remarks}");`
    let response = new Promise((res, rej)=>{
        db.exec(query, (err)=>{
            if (err){
                return rej(JSON.stringify(err))
            }

            let query2 = `SELECT id FROM Item WHERE name="${request.name}" AND remarks="${request.remarks}"`;
            db.get( query2, (err, itemid)=>{
                if (err || itemid===undefined){
                    return rej(JSON.stringify(err))
                }

                let id = itemid.id;
                let query3 = `INSERT INTO Raw_Material_StockBook (item_id, total_purchased, available) VALUES (${Number(id)}, ${0}, ${0})`

                db.exec(query3, (err)=>{
                    if (err){
                    return rej(JSON.stringify(err))
                    }
                    res("Successfully Saved!")
                })
            })
        })
    })

    return response;
}

module.exports = { postItemDetail }

