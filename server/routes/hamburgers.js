const express = require("express");
const router = express.Router();



const Hamburger = require("../models/Hamburger")



router.get("/hamburgers", (req, res)=>{
  
     Hamburger.find()
     .then(hamburgers=>{
         res.json(hamburgers)
     })
     .catch(err=>{
         res.status(500).json(err)
     })

})

router.get("/hamburgers/:id", (req, res)=>{
    Hamburger.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>console.log(err))

})

router.post("/posthamburger", (req, res)=>{
    
    Hamburger.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
  



})


















module.exports = router