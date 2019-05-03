import React, { Component } from 'react'
import Apiservice from "../service/apiservice"
import Modal from "react-modal"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: "60%"
    }
}

Modal.setAppElement('#root')

export default class AddHamb extends Component{

constructor(pros){

super(pros)

this.state = {
modalIsOpen: false,
    hamburger: {
        name: "",
        precio: 0,
        img: "",
        puntuación: 0,
        descripción: "",

     }
     

}

    this.service = new Apiservice()
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)


}
openModal = () => {
    this.setState({ modalIsOpen: true });
}

closeModal = () => {
    this.setState({ modalIsOpen: false });
}

handleState = e =>{
    const {name, value} = e.target
    this.setState({
        hamburger:{
          ...this.state.hamburger, [name] : value
      }


    })
}


handleFileUpload = e =>{
    const uploadImage = new FormData()
    uploadImage.append("img", e.target.files[0])
    
    this.service.handleUpload(uploadImage)
    .then(response=>{
        console.log(response)
        this.setState({
            hamburger:{
                ...this.state.hamburger, img: response.secure_url
            }
        })
    })
    .catch(err=>console.log(err))
    
    
    }
    handleSubmit = e =>{
        e.preventDefault()
       this.service.postHamburger(this.state.hamburger)
     .then(x=> this.props.refreshHamb()) 
       this.setState({
        hamburger: {   
             name: "",
             precio: 0,
             img: "",
             puntuación: 0,
             descripción: "",
            }
       })
       this.closeModal()
    
     }



render() {
 
    return(
        <div> 
           
        <button onClick={this.openModal} className="btn btn-add">Nueva HB</button>
           <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
    
               <h2>Añade hamburguesa</h2>
               <form onSubmit={this.handleSubmit}>
    
                <div className="form-group">
                           <label>Nombre</label>
                           <input type="text" className="form-control" name="name" value={this.state.hamburger.name} onChange={(e) => this.handleState(e)} />
                       </div>
                 <div className="form-group">
                           <label>Precio</label>
                           <input type="text" className="form-control" name="precio" value={this.state.hamburger.precio} onChange={(e) => this.handleState(e)} />
                </div>
                
                <div className="form-group">
                           <label>Puntuación</label>
                           <input type="text" className="form-control" name="puntuación" value={this.state.hamburger.puntuación} onChange={(e) => this.handleState(e)} />
                </div>
              
            
                  <div className="form-group">
                      <label>Imagen</label>
                      <input type="file" className="form-control" onChange={(e) => this.handleFileUpload(e)} />
                  </div>
         
               <div className="form-group">
                         <label>Descripción</label>
                         <input type="text" className="form-control" name="descripción" value={this.state.hamburger.descripción} onChange={(e) => this.handleState(e)} />
              </div>
              

                
    
                   <button type="submit" className="btn btn-primary">Crear</button>
    
               </form>
    
           </Modal>
          </div>
       

)
}
}



