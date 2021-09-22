const express = require('express');
const route = express.Router();
const searchManager = require('../feature/index');

/*
    Handles search query for providing suggestion. Takes below argument as input
    context: Table name on which to search for given input e.g. rawMaterialStock
    searchParam: Characters typed by user in the UI to search for 
*/
route.get('/', (req, res)=>{
    let request = req.query;
    searchManager.search(request.context, request.colName, request.searchParam).then((searchResult)=>{
        res.status(200).send(searchResult);
    })
    
})


module.exports = route
