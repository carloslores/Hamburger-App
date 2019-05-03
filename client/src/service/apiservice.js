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
     postHamburger = newHamb =>{
         const promise = this.service.post("posthamburger", newHamb, { withCredentials: true })
         .then(response=>{
             console.log(response)
             return response.data})
        //  .catch(err=>console.log(err))
         return promise
     }
     handleUpload = theFile => {

        console.log('file in service: ', theFile)

        return this.service.post('/upload', theFile)
            .then(res => res.data)
            .catch(err => console.log(err));
    }


}





export default Apiservice
