import React, {Component} from 'react'
import Apiservice from "../service/apiservice"
import axios from 'axios';


export default class Hamburguers extends Component{

    constructor(){
        super()
        this.state={
            hamburgers: [],
            HamburguerId: undefined,
        
        }
        // this.serviceHamburgers = new Apiservice()
     
     
     
     
    }
     
    getAllHamburgers = ()=>{
        axios.get(`http://localhost:5000/api/hamburgers`)
        .then(response=>{
            console.log(response)
            this.setState({
                hamburgers: response.data
            })
        })
    //   return this.serviceHamburgers.getHamburgers()
    //     .then(allHamburgers=>{
    //         console.log(allHamburgers)
    //         this.setState({
    //             hamburgers: allHamburgers
    //         })

    //     })
  }
    componentDidMount(){
        axios.get(`http://localhost:5000/api/hamburgers`)
        .then(response=>{
            console.log(response)
            this.setState({
                hamburgers: response.data
            })
        })
       
    }


    render(){
        
        return(
            <main>
                <h1>Hola, este es el componente "Hamburger"</h1>



            </main>
        )
    }






}

