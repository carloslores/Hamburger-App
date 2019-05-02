import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



const CardHamburgers = hamburger=>{

return(

 
  <article className="col-sm-6 col-md-4 col-lg-6"> 
       <div className="card card-hamburger">
          <img className="card-img-top" src={hamburger.img} alt="imagen -pintura" />
            
             {/* <small>{hamburger.descripción}</small>  */}
              <div className="card-body">
                        
                 <p>{hamburger.name}</p>
                 <p>Precio: {hamburger.precio} $</p>
                 <Link to={`/hamburger/${hamburger._id}`}> <Button variant="outline-info">Detalles</Button></Link>
              </div>
          </div>              

 </article> 
   
  


)



}


export default CardHamburgers