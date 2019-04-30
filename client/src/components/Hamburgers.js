import React, {Component} from 'react'
import Apiservice from "../service/apiservice"


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
      return this.serviceHamburgers.getHamburgers()
        .then(hamburgers=>{
            console.log(hamburgers)
            this.setState({
                hamburgers: hamburgers
            })

        })
  }
    componentDidMount(){
        this.getAllHamburgers()
    }


    render(){
        return(
            <main>
                <h1>Hola, este es el componente "Hamburguer"</h1>



            </main>
        )
    }






}