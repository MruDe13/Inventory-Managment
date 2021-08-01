const express = require('express');
const route = express.Router();
const getCustomerDetail = require("../databaseQuery/getcustomerdetail");


route.get('/', (req, res)=>{
    getCustomerDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })








module.exports = route;

