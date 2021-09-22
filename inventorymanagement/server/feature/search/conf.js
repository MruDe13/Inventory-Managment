/* 
*   This object is used to create index for search.
*   Key to the object is name of the table and value is an array of columns which we want to index
*/
const searchIndexConfig = {
    //TableName: [col1, col2] array of columns to index
    rawmaterialstock: ['rawMaterialName']
}

module.exports = searchIndexConfig;