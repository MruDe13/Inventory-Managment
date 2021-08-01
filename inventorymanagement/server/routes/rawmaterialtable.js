const express = require('express');
const route = express.Router();
const getRawMaterialDetail = require("../databaseQuery/getrawmaterialdetail");


route.get('/', (req, res)=>{
    getRawMaterialDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })








module.exports = route;

