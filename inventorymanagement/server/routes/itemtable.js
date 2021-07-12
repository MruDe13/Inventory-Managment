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
    res.send({"Response":data})
  }).catch((err)=>{
    console.log(err);
  })
})

module.exports = route
