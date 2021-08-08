const express = require('express');
const route = express.Router();
const postProductionDetail = require('../databaseQuery/post/postproductiondetail');
const getProductionDetail = require('../databaseQuery/get/getvendordetail');


route.get('/', (req, res)=>{
    getProductionDetail().then((data)=>{
      res.status(200).send(data);
    }).catch((err)=>{
      console.log(err)
    })
})



route.post('/', (req, res)=>{
    let request = req.body;
    postProductionDetail(request).then((data)=>{
        res.status(200).send({"Response":data})
      }).catch((err)=>{
        console.log(err);
        res.status(400).send({"Response": err})
      })
  })

  module.exports = route;
  