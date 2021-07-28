const express = require('express');
const checkItemField = require('../checkinputs/checkItem/checkitemfield');
const checkItemDuplicate = require('../databaseQuery/checkitemduplicate');
const route = express.Router();
const getItemList = require('../databaseQuery/getitemlist');
const postItemDetail = require('../databaseQuery/postitemdetail');

route.get('/', (req, res)=>{
  getItemList.getItemList().then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    console.log(err)
  })
})

route.post('/', (req,res)=>{
  let request = req.body;

  let firstCheckPoint = checkItemField.checkItemField(request);
  if (firstCheckPoint === true){} else {
    return res.status(200).send({"Response": firstCheckPoint})
  }

  checkItemDuplicate.checkItemDuplicate(request).then((duplicate)=>{
    if(duplicate){
      res.status(200).send({"Response": "Item already exists!"})
    } else {
      postItemDetail.postItemDetail(request).then((data)=>{
        res.status(200).send({"Response":data})
      }).catch((err)=>{
        console.log(err);
        res.status(400).send({"Response": err})
      })
    }
  })
  
})

module.exports = route
