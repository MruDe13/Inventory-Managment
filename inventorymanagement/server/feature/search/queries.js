const DB = require("../../dbConnection");

async function getItemsToFillStore(tableName, colToIndex) {
    let db = DB.getDbConnection();
    let data = [];
    let query = `SELECT id,${colToIndex} from ${tableName}`;
    console.log(query);
    let response = new Promise((res, rej) => {
        db.serialize(() => {
            db.each(
                query,
                (err, details) => {
                    if (err) {
                        console.error(err);
                        rej(JSON.stringify(err));
                    }
                    data.push(details);
                },
                () => {
                    res(data);
                }
            );
        });
    });

    return response;
}

async function getItemsFromTable(ids, tableName, colName) {
    let db = DB.getDbConnection();
    let data = [];

    let query = `Select ${colName} from ${tableName} where id in (${ids.toString()});`;
    console.log("getItemsFromTable ", query);
    let queryResult = new Promise((res, rej) => {
        db.serialize(() => {
            db.each(
                query,
                (err, details) => {
                    if (err) {
                        console.error(err);
                        rej(JSON.stringify(err));
                    }
                    data.push(details);
                },
                () => {
                    //console.log("query result", data);
                    res(data);
                }
            );
        });
    });
    return queryResult;
}

module.exports.getItemsToFillStore = getItemsToFillStore;
module.exports.getItemsFromTable = getItemsFromTable;
