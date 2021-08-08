const DB = require('../../dbConnection');

async function postProductionDetail(request){
    let db = DB.getDbConnection();
    let query = ``;

    let response = new Promise((res,rej)=>{
        db.get(query, (productid, err)=>{
            if(err || productid === undefined){
                return rej("Invalid Product. Register the product first!")
            }

            let query1 = ``
            db.exec(query1, (err)=>{
                if(err){
                    return rej("")
                }

                db.get(query3, (quantity, err)=>{
                    if(err || quantity === undefined){

                    }
        
                    let query1 = ``
                    db.exec(query4, (err)=>{
                        if(err){
                        }
                        
                    })
        
                })
            })

        })
    })

    return response;
}


module.exports = postProductionDetail;

