const express = require('express');
const route = express.Router();
const getPurchasetDetail = require('../databaseQuery/get/getpurchasedetail');
const postPurchasetDetail = require('../databaseQuery/post/postpurchasedetail');

route.get('/', (req, res)=>{
    getPurchasetDetail().then((data)=>{
      res.status(200).send(data);
    }).catch((err)=>{
      console.log(err);
    })
})

route.post('/', (req, res)=>{
  let request = req.body;
  postPurchasetDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})

module.exports = route
