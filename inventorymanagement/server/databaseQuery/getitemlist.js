const DB = require('../dbConnection');

async function getItemList(){
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT DISTINCT name FROM Item`;
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

module.exports = { getItemList }

