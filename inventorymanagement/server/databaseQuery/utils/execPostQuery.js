const DB = require('../../dbConnection');

async function execPostQuery(query){
    console.log("execPostQuery query: ", query);
    
    if(typeof(query) === "string" && query.length === 0){
        console.warn("Empty query is being passed to executor. Please check the calling code");
        return new Promise.reject("Empty string was passed", query);
    }

    if(typeof(query) !== "string"){
        console.warn("Passing non-string to runGetQuery. We only support running single select query as of now!!");
        return new Promise.reject("Unsupported type!", query);
    }
    
    let db = DB.getDbConnection();
    let dbInsertPromise = new Promise((res,rej)=>{
        db.exec(query, (err)=>{
            if (err){
                return rej("Query execution failed ", err);
            }
            res("Successful");
        });
    })

    return dbInsertPromise;
}

module.exports = execPostQuery;