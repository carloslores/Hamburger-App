import React, {Component} from 'react'


const CardHamburgers = hamburger=>{

return(


<div className="col-sm-6 col-md-4 col-lg-6"> 
                        <div className="card card-hamburger">
                            <img className="card-img-top" src={hamburger.img} alt="imagen -pintura" />
                            <p>{hamburger.name}</p>
                            <p>Precio: {hamburger.precio} $</p>
                            {/* <small>{hamburger.descripción}</small> */}
                            <div className="card-body">
                           

                                {
                                
                                }
                            </div>
                        </div>
                    
              

                

 </div>
   
  


)



}


export default CardHamburgers