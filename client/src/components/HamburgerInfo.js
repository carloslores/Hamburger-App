import React, { Component } from "react"
import Apiservise from "../service/apiservice"


class HamburgerInfo extends Component{

constructor(props){
    super(props)
    this.state = {
        hamburgerProfile:{}
    }
    this.hamburgerService = new Apiservise()

}

getHamInfo(){
    return this.hamburgerService.getHamburgerId(this.props.match.params.id)
    .then(response =>this.setState({hamburgerProfile:response}))
}

componentDidMount(){
    this.getHamInfo()
}


render(){
   

    
   
    return(
        <article>
        <img src={this.state.hamburgerProfile.img}/>
        </article>
    )
    
    }
}


export default  HamburgerInfo