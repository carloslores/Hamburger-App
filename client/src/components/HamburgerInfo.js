import React, { Component } from "react"
import Apiservise from "../service/apiservice"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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
           <Card
                                className="card  card-info"
                                // onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea className="card card-hamburger">
                                    <CardMedia
                                        className="card-media"
                                        src={this.state.hamburgerProfile.img}
                                    />
                                    <img className="card-hamburger-img img-info" src={this.state.hamburgerProfile.img}></img>
                                    <CardContent className="card-content">
                                        <Typography className="text-info-ham" gutterBottom variant="h6" component="h6">
                                           <h4> {this.state.hamburgerProfile.name}</h4><br></br>
                                          <h3 className="precio">{this.state.hamburgerProfile.precio} €</h3><br></br>
                                          <h4 >{this.state.hamburgerProfile.puntuación}<i class="fas fa-star"></i></h4> 
                                          <p className="desciption">{this.state.hamburgerProfile.descripción}</p> 
                                        </Typography>
                                       
                                    </CardContent>
                                   
                                </CardActionArea>
                            </Card>

        {/* <div className="row">
        <span className="ham-info col-sm-6 col-md-4 col-lg-5">
        <img src={this.state.hamburgerProfile.img}/>
        </span>
        <span className="col-sm-6 col-md-4 col-lg-6 info-cont">
            <h1>{this.state.hamburgerProfile.name}</h1>
            <h2>{this.state.hamburgerProfile.precio}$</h2>
            <p>{this.state.hamburgerProfile.descripción}</p>
        </span>
        </div> */}
        </article>
    )
    
    }
}


export default  HamburgerInfo