import React, { Component } from "react"
import Apiservise from "../service/apiservice"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';



import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


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
        <article className="col-12">
                        <Card className="card  card-info" >
                                <CardActionArea className="card card-hamburger">
                                   
                                 <img className="card-hamburger-img img-info" src={this.state.hamburgerProfile.img}></img>
                                    <CardContent className="card-content">
                                        <div className="text-info-ham">
                                           <h4> {this.state.hamburgerProfile.name}</h4><br></br>
                                          <h3 className="precio">{this.state.hamburgerProfile.precio} €</h3><br></br>
                                          <h4 ><Rater total={5} rating={this.state.hamburgerProfile.puntuación} id="starts"/></h4> 
                                          <p className="desciption">{this.state.hamburgerProfile.descripción}</p> 
                                          </div>
                                       
                                    </CardContent>
                                   
                                </CardActionArea>
                            </Card>

       
        </article>
    )
    
    }
}


export default  HamburgerInfo