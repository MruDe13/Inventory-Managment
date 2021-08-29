const DB = require('../../dbConnection');

queries = [
    "Create table test (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
    "Insert into test (name) values ('gggg')"
];

async function execMultiplePostQuery(queries){
    console.log("execPostQuery query: ", query);
    
    if(!Array.isArray(queries)){
        console.warn("Unsupported argument. This function exepcts an array of queries");
        return new Promise.reject("Expected array", queries);
    }

    if(query.length <= 1 ){
        console.warn("Received an array of length less than 2");
        return new Promise.reject("Expected array with size greater than 1", queries);
    }
 
    let db = DB.getDbConnection();
    let dbInsertPromise = new Promise((res,rej)=>{
        db.serialize(()=>{
            for(let i = 0; i<queries.length; i++){
                db.run(queries[i]);
            }
        });
    })

    return dbInsertPromise;
}

module.exports = execPostQuery;