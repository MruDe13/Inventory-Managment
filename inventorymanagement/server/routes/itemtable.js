const express = require('express');
const route = express.Router();
const getItemList = require('../databaseQuery/getitemlist');
const postItemDetail = require('../databaseQuery/postitemdetail')


route.get('/', (req, res)=>{
  getItemList.getItemList().then((data)=>{
    res.send(data);
  }).catch((err)=>{
    console.log(err)
  })
})

route.post('/', (req,res)=>{
  let request = req.body;
  postItemDetail.postItemDetail(request).then((data)=>{
    res.status(200).send({"Response":data})
  }).catch((err)=>{
    console.log(err);
    res.status(400).send({"Response": err})
  })
})

module.exports = route
