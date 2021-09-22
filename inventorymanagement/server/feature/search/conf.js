/* 
*   This object is used to create index for search.
*   Key to the object is name of the table and value is an array of columns which we want to index
*/
const colToIndexConfig = {
    rawmaterialstock: ['rawMaterialName']
}

module.exports = colToIndexConfig;