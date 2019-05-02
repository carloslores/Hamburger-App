require("dotenv").config();

const mongoose = require("mongoose");

const Hamburger = require("../models/Hamburger");

mongoose
.connect(process.env.DBURL, {useNewUrlParser: true})
.then(x=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err=>{
    console.error('Error connecting to mongo', err)
})

let hamburgers = [
    {
        name: "Hamburguesa Poseidón",
        precio: 11.00,
        img: "https://scontent.fmad7-1.fna.fbcdn.net/v/t1.0-9/52344263_1050801278460462_1082051005169795072_o.jpg?_nc_cat=110&_nc_ht=scontent.fmad7-1.fna&oh=ab36da5d20ddfc08ddca7c0cee6d6905&oe=5D64740A",
        puntuación: 5,
        descripción:"Deliciosas carne de res, jamón, queso y salsa cheddar, tocineta y verduras, acompañada de papas a la francesa"
    
    
    },
    {
        name: "Rustic Smoked Cheese",
        precio: 7.00,
        img: "https://lapublicidad.net/wp-content/uploads/2019/04/Rustic-Smoke-Cheese-Baja.jpg",
        puntuación: 4,
        descripción:"Deliciosa carne a la parrilla, queso ahumado, salsa de cerveza negra y pan de centeno."
    
    
    },
    {
        name: "Big King XXL",
        precio: 8.00,
        img: "https://www.citycentremallbeirut.com/-/media/ccbe/dining/burger-king/big-king-xxl-800x600px.jpg",
        puntuación: 4,
        descripción:"Una hamburguesa que da la talla… XXL. Carne a la parrilla con triple de queso fundido y salsa BIG KING."
    
    
    },
    {
        name: "Hamburguesa Bronx",
        precio: 11.00,
        img: "https://www.skylinediner.es/wp-content/uploads/2018/10/hamburguesa_bronx_MJ_Skyline_030-corto.jpg",
        puntuación: 5,
        descripción:"Cebolla caramelizada, Cebolla frita, Cebollino, Queso Monterey Jack, Relish, Rúcula.."
    
        
    },
    {
        name: "New York Burger",
        precio: 11.40,
        img: "https://unbuendiaenmadrid.com/wp-content/uploads/2018/05/New-York-Burger-Nueva-hamburguesa.jpg.webp",
        puntuación: 5,
        descripción:"Queso cheddar, bacon crujiente, toque de salsa BBQ, lechuga, tomate, cebolla roja y pepinillos."
    
    
    },
    {
        name: "Tartar Burger",
        precio: 11.00,
        img: "https://unbuendiaenmadrid.com/wp-content/uploads/2019/03/TARTAR-BURGER.jpg.webp",
        puntuación: 5,
        descripción:"100% carne vacuno, aliñada con cebolla roja, alcaparras y pepinillos con salsa de mostaza"
        
    },
    {
        name: "Kevin Bacon",
        precio: 11.00,
        img: "https://www.goikogrill.com/wp-content/uploads/2017/03/GOIKO_GRILL_WEB-11.jpg",
        puntuación: 5,
        descripción:"Carne a la plancha mezclada con trozos de bacon, cebolla crunchy y queso americano."
    
    },
    {
        name: "La Yankee",
        precio: 11.00,
        img: "https://www.google.es/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwionrGwgvjhAhUMoRQKHWbYCnQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.goikogrill.com%2Fplato%2Fla-yankee%2F&psig=AOvVaw3upLPRNI0yYZQr4tmc2Wus&ust=1556720616778820",
        puntuación: 5,
        descripción:"Carne de vacuno, costillas de cerdo deshuesadas en salsa Barbacoa Goiko y dos niveles de queso americano"
        
    },
    {
        name: "Pigma",
        precio: 11.00,
        img: "https://www.goikogrill.com/wp-content/uploads/2017/01/GOIKO_GRILL_WEB-2.jpg",
        puntuación: 5,
        descripción:"Huevo frito, bacon, queso americano y la exquisita salsa Mayo Goiko."
        
    
    },
    {
        name: "Bomba sexy",
        precio: 11.00,
        img: "https://www.goikogrill.com/wp-content/uploads/2017/07/GOIKO_GRILL_WEB-16.jpg",
        puntuación: 5,
        descripción:"Mix de queso Monterrey Jack empanado, setas fritas, bacon crujiente y salsa mayo ahumada."
        
    },

]


    Hamburger.deleteMany()
    .then(()=>{
        return Hamburger.create(hamburgers)
    })
    .then(hamburgersCreated=>{
        console.log(`${hamburgersCreated.length} hamburgers created with the following id:`)
        console.log(hamburgersCreated.map(h=>h._id))
    })
    .then(()=>{
        mongoose.disconnect()
    })
    .catch(err => {
        mongoose.disconnect()
        throw err
    })