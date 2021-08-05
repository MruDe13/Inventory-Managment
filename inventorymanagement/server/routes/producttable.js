const express = require('express');
const route = express.Router();
const getProductDetail = require("../databaseQuery/get/getproductdetail");
const postProductDetail = require('../databaseQuery/post/postproductdetail');


route.get('/', (req, res)=>{
    getProductDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })

route.post('/', (req, res)=>{
  let request = req.body;
  postProductDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})






module.exports = route;

