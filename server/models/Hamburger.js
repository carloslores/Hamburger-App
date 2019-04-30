const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hamburgerSchema = new Schema({
name: String,
precio: Number,
img: String,
puntuación: Number,
descripción: String
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


const Hamburger = mongoose.model("Hamburger", hamburgerSchema)
module.exports = Hamburger