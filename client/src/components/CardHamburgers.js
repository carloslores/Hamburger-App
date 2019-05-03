import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

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
                                className="card" >
                                <CardActionArea className="card card-hamburger">
                                    
                                    <img className="card-hamburger-img" src={hamburger.img}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {hamburger.name}
                                        </Typography>
                                      <Link className="details" to={`/hamburger/${hamburger._id}`}> Detalles</Link>
                                    </CardContent>
                                   
                                </CardActionArea>
                               
                            </Card>
                    </div>
      

 </article> 
   
  


)



}

export default withStyles(styles)(CardHamburgers);
