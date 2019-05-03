import React, {Component} from 'react'
import Apiservice from "../service/apiservice"

import CardHamburgers from "./CardHamburgers"
import AddHamb from "./AddHamb"

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
                 <div className="add col-2">
                <AddHamb refreshHamb={this.getAllHamburgers} />
                </div>
               <div className="col-10">
                <div className="row">
                

                {
                    this.state.hamburgers.map(hamburger=><CardHamburgers key={hamburger._id} {...hamburger}  getHamId={this.getHamId}/>)
                }
               
              
                </div>
                </div>
            </main>
        )
    }






}

