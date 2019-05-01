import React, {Component} from 'react'
import Apiservice from "../service/apiservice"
import axios from 'axios';
import CardHamburgers from "./CardHamburgers"


export default class Hamburguers extends Component{

    constructor(){
        super()
        this.state={
            hamburgers: [],
            HamburguerId: undefined,
        
        }
        this.serviceHamburgers = new Apiservice()
     
     
     
     
    }
     
    getAllHamburgers = ()=>{
    //     axios.get(`http://localhost:5000/api/hamburgers`)
    //     .then(response=>{
    //         console.log(response)
    //         this.setState({
    //             hamburgers: response.data
    //         })
    //     })
        return this.serviceHamburgers.getHamburgers()
            .then(allHamburgers=>{
              console.log(allHamburgers)
              this.setState({
                  hamburgers: allHamburgers
              })

     })
  }
    componentDidMount(){
        // axios.get(`http://localhost:5000/api/hamburgers`)
        // .then(response=>{
        //     console.log(response.data[0])
        //     this.setState({
        //         hamburgers: response.data
        //     })
        // })
        this.getAllHamburgers()
       
    }


    render(){
        
        return(
            <main className="container">
                 
                <h1>Hola, este es el componente "Hamburger"</h1>
                <div className="row">
                {
                    this.state.hamburgers.map(hamburger=><CardHamburgers key={hamburger._id} {...hamburger}/>)
                }

                </div>
            </main>
        )
    }






}

