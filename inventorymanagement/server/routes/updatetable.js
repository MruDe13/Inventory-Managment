const express = require('express');
const route = express.Router();
const updatedPurchase = require('../databaseQuery/updatepurchase');

route.post('/purchase', (req, res)=>{
    let request = req.body;
    updatedPurchase.updatePurchase(request).then((data)=>{
        res.status(200).send({"Response":data})
      }).catch((err)=>{
        console.log(err);
        res.status(400).send({"Response": err})
      })
})


module.exports = route
