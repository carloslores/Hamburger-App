const express = require("express");
const router = express.Router();
// const Router       = require('router')
 
// const router = Router()
//const hamburguer = require("../hamburgers.json")
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


















module.exports = router