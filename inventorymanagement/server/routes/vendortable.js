const express = require('express');
const route = express.Router();
const getVendorDetail = require('../databaseQuery/get/getvendordetail');
const postVendorDetail = require('../databaseQuery/post/postvendordetail');

route.get('/', (req, res)=>{
  getVendorDetail().then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    console.log(err);
  })
})


route.post('/', (req, res)=>{
  let request = req.body;
  postVendorDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})

module.exports = route
