const DB = require('../../dbConnection');

async function getProductDetail(){
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT * FROM product`;
    let response = new Promise((res, rej)=>{
        db.serialize(() => {
            db.each(query, (err, details) => {
              if (err) {
                console.error(err);
                rej(JSON.stringify(err))
              }
              data.push(details);  
            }, ()=>{
              res(data)
            });
        });
    })

    return response;
}

module.exports = getProductDetail;
