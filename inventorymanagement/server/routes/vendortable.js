const express = require('express');
const getVendorDetail = require('../databaseQuery/getvendordetail');
const postVendorDetail = require('../databaseQuery/postvendordetail');
const route = express.Router();

route.get('/', (req, res)=>{
  getVendorDetail.getVendorDetail().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log(err);
  })
})


route.post('/', (req,res)=>{
  let request = req.body;
  postVendorDetail.postVendorDetail(request).then((data)=>{
    res.status(200).send({"Response":data})
  }).catch((err)=>{
    console.log(err);
    res.status(400).send({"Response": err})
  })
})

module.exports = route
