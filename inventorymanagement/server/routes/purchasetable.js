const express = require('express');
const route = express.Router();
const getPurchasetDetail = require('../databaseQuery/getpurchasedetail');
const postPurchasetDetail = require('../databaseQuery/postpurchasedetail');

route.get('/', (req, res)=>{
    getPurchasetDetail.getPurchasetDetail().then((data)=>{
      console.log(data);
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
})

route.post('/', (req,res)=>{
    let request = req.body;
    postPurchasetDetail.postPurchasetDetail(request).then((data)=>{
      console.log(data);
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})

module.exports = route
