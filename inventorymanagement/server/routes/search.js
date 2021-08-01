const express = require('express');
const route = express.Router();
const searchManager = require('../feature/index');

route.get('/', (req, res)=>{
    let request = req.query;
    searchManager.search(request.context, request.searchParam).then((searchResult)=>{
        res.status(200).send(searchResult);
    })
    
})


module.exports = route
