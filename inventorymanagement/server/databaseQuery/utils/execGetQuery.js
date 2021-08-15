const DB = require('../../dbConnection');

async function execGetQuery(query){
    
    console.info("execGetQuery query: ", query);
    
    if(typeof(query) === String && query.length === 0){
        console.warn("Empty query is being passed to executor. Please check the calling code");
    }

    if(typeof(query) !== "string"){
        console.warn("Passing non-string to runGetQuery. We only support running single select query as of now!!");
    }
    
    let db = DB.getDbConnection();
    let data =[];

    let queryExecPromise = new Promise((res,rej)=>{
        db.each(query, (err, details) => {
            if (err) {
              console.error("Error executing query", err);
              rej(JSON.stringify(err))
            }
            data.push(details);  
          }, ()=>{
            res(data)
          });
      });

    return queryExecPromise;
}


module.exports = execGetQuery;

