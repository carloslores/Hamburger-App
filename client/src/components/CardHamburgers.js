import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


const CardHamburgers = hamburger=>{

return(

 
  <article className="col-sm-6 col-md-4 col-lg-6"> 


<div className="card-container" id="hamburgers-card" >
                            <Card
                                className="card"
                                // onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea className="card card-hamburger">
                                    <CardMedia
                                        className="card-media "
                                        src={hamburger.img}
                                    />
                                    <img className="card-hamburger-img" src={hamburger.img}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {hamburger.name}
                                        </Typography>
                                        <Link to={`/hamburger/${hamburger._id}`}> <Button variant="outline-info">Detalles</Button></Link>
                                    </CardContent>
                                   
                                </CardActionArea>
                            </Card>
                    </div>
       {/* <div className="card card-hamburger">
          <img className="card-img-top" src={hamburger.img} alt="imagen -pintura" />
            
             {/* <small>{hamburger.descripción}</small>  */}
              {/* <div className="card-body">
                        
                 <p>{hamburger.name}</p>
                 <p>Precio: {hamburger.precio} $</p>
                 <Link to={`/hamburger/${hamburger._id}`}> <Button variant="outline-info">Detalles</Button></Link>
              </div>
          </div>               */} 

 </article> 
   
  


)



}

export default withStyles(styles)(CardHamburgers);
