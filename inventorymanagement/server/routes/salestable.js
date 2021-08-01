const express = require('express');
const route = express.Router();
const getSalesDetail = require("../databaseQuery/getsalesdetail");


route.get('/', (req, res)=>{
    getSalesDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })








module.exports = route;

