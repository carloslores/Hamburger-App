import axios from "axios"

class Apiservice{
   
   
    constructor(){
     
        this.service = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
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
     


}





export default Apiservice
