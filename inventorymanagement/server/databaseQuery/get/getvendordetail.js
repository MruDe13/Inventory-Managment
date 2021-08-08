const DB = require('../../dbConnection');

async function getVendorDetail(){
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT * FROM vendor`;
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

module.exports =  getVendorDetail;

