const express = require('express');
const route = express.Router();
const getSalesDetail = require("../databaseQuery/get/getsalesdetail");
const postSalesDetail = require('../databaseQuery/post/postsalesdetail');


route.get('/', (req, res)=>{
    getSalesDetail().then((data)=>{
      res.status(200).send(data)
    }).catch((err)=>{
      console.log(err);
    })
  })


route.post('/', (req, res)=>{
  let request = req.body;
  postSalesDetail(request).then((data)=>{
      res.status(200).send({"Response":data})
    }).catch((err)=>{
      console.log(err);
      res.status(400).send({"Response": err})
    })
})





module.exports = route;

