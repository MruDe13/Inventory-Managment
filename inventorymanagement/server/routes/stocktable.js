const express = require('express');
const getStockDetail = require('../databaseQuery/getstockdetail');
const route = express.Router();

route.get('/', (req, res)=>{
  getStockDetail.getStockDetail().then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    console.log(err)
  })
})

route.post('/', (req,res)=>{
})

module.exports = route
