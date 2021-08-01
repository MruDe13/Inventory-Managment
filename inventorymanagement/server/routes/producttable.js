const express = require('express');
const route = express.Router();
const getProductDetail = require("../databaseQuery/getproductdetail");


route.get('/', (req, res)=>{
    getProductDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })








module.exports = route;

