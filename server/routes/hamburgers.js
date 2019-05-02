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

router.post("/posthamburger", uploader.single("hamburger"),(req, res)=>{

    const {secure_url} = req.file;
    const newHamburger = new Hamburger({
        image: secure_url
    })
    newHamburger.save()
    .then(data=>res.status(200).json(data))
    .catch(err=>console.log(err))



})


















module.exports = router