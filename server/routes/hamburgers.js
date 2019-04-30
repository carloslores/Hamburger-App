const express = require("express");
const router = express.Router();

const Hamburguer = require("../models/Hamburger")


router.get("/hamburgers", (req, res)=>{
    console.log("Entro en la ruta: hamburger")
    Hamburguer.find({hamburgers})
    .then(hamburgers=>{
        res.json(hamburgers)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

})



















module.exports = router