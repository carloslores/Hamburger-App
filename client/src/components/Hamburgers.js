import React, {Component} from 'react'
import Apiservice from "../service/apiservice"
import axios from 'axios';
import CardHamburgers from "./CardHamburgers"


export default class Hamburguers extends Component{

    constructor(){
        super()
        this.state={
            hamburgers: [],
            hamburgerIdSelected: undefined,
        
        }
        this.serviceHamburgers = new Apiservice()
     
     
     
     
    }
     
    getAllHamburgers = ()=>{
        return this.serviceHamburgers.getHamburgers()
            .then(allHamburgers=>{
              console.log(allHamburgers)
              this.setState({
                  hamburgers: allHamburgers
              })

     })
    }

    getHamId = (id)=>{
         this.props.getHamId(id)
    }
    
    
    componentDidMount(){
        this.getAllHamburgers()
       
    }


    render(){
        
        return(
            <main className="container">
                 
                <h1>Hola, este es el componente "Hamburger"</h1>
                <div className="row">
                {
                    this.state.hamburgers.map(hamburger=><CardHamburgers key={hamburger._id} {...hamburger} getHamId={this.getHamId}/>)
                }
               

                </div>
            </main>
        )
    }






}

