const express = require('express');
const checkVendorField = require('../checkinputs/checkVendor/checkvendorfield');
const checkVendorDuplicate = require('../databaseQuery/checkvendorduplicate');
const route = express.Router();
const getVendorDetail = require('../databaseQuery/getvendordetail');
const postVendorDetail = require('../databaseQuery/postvendordetail');

route.get('/', (req, res)=>{
  getVendorDetail.getVendorDetail().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log(err);
  })
})


route.post('/', (req,res)=>{
  let request = req.body;

  let firstCheckPoint = checkVendorField.checkVendorField(request);
  if (firstCheckPoint === true){} else {
    return res.status(200).send({"Response": firstCheckPoint})
  }

  checkVendorDuplicate.checkVendorDuplicate(request).then((duplicate)=>{
    if(duplicate){
      res.status(200).send({"Response": "Vendor already exists!"})
    } else {
        postVendorDetail.postVendorDetail(request).then((data)=>{
          res.status(200).send({"Response":data})
        }).catch((err)=>{
          console.log(err);
          res.status(400).send({"Response": err})
        })
    }
  })

  
  

})

module.exports = route
