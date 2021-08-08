
async function GetFromTable(db, requirement, tablename, column, inputData){

    let query = `SELECT ${requirement} FROM ${tablename} WHERE ${column}= "${inputData}";`;
    let response = new Promise((res, rej)=>{

        db.get(query, (err, result)=>{
            if(err || result === undefined){
                res(undefined);
                console.log("Error");
                return;
            }
            console.log("Result", result);
            console.log(requirement);
            res(result[requirement])
        });
    })
    return response   
}

module.exports = GetFromTable;

