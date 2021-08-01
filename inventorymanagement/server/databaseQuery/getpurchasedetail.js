const DB = require('../dbConnection');

async function getPurchaseDetail(){
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT * FROM purchase`;
    let response = new Promise((res, rej)=>{
        db.serialize(() => {
            db.each(query, (err, details) => {
              if (err) {
                console.error(err);
                rej(JSON.stringify(err))
              }
              console.log(details);
              data.push(details);  
            }, ()=>{
              res(data)
            });
        });
    })

    return response;
}

module.exports = getPurchaseDetail;
