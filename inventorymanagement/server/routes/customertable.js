const express = require('express');
const route = express.Router();
const getCustomerDetail = require("../databaseQuery/get/getcustomerdetail");
const postCustomerDetail = require('../databaseQuery/post/postcustomerdetail');


route.get('/', (req, res)=>{
    getCustomerDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
})



route.post('/', (req, res)=>{
  let request = req.body;
  postCustomerDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})




module.exports = route;

