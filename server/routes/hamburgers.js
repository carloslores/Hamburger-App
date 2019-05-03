const express = require("express");
const router = express.Router();


const uploader = require('../configs/cloudinary-setup');
const Hamburger = require("../models/Hamburger")



router.get("/hamburgers", (req, res)=>{
   // res.json(hamburguer)
     console.log("Entro en la ruta: hamburger")
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
  

    // const {secure_url} = req.file;
    // const newHamburger = new Hamburger({
    //     image: secure_url
    // })
    // newHamburger.save()
    // res.status(200).json(newHamburger)
    // .catch(err=>console.log(err))



})


















module.exports = router