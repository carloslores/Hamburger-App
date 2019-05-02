import axios from "axios"

class Apiservice{
   
   
    constructor(){
     
        this.service = axios.create({
            baseURL:"http://localhost:5000/api",
            withCredentials:true
        })
    
    }
    getHamburgers = () =>{
        return this.service.get("/hamburgers")
        .then(response=>{
            console.log("entro en el")
            console.log(response.data)
            return response.data})
        .catch((err)=> console.log(err))
    }
    getHamburgerId = idHamburger=>{
        return this.service.get(`/hamburgers/${idHamburger}`)
        .then(res=>res.data)
    }
     


}





export default Apiservice
