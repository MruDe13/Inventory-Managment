const express = require('express');
const route = express.Router();
const getRawMaterialDetail = require("../databaseQuery/get/getrawmaterialdetail");
const postRawMaterialDetail = require('../databaseQuery/post/postrawmaterialdetail');


route.get('/', (req, res)=>{
    getRawMaterialDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })


route.post('/', (req, res)=>{
  let request = req.body;
  postRawMaterialDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})






module.exports = route;

