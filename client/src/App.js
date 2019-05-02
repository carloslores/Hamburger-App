import React, { Component } from 'react';

import './App.css';
import { Switch, Route} from 'react-router-dom';


import Hamburgers from "./components/Hamburgers"
import HamburgerInfo from "./components/HamburgerInfo"
import Slider from "./components/Slider"
class App extends Component {

  constructor(){
   super()
   this.state ={hamburgerIdSelected: undefined}

  }

  getHamId = (id)=>{
    this.setState({...this.state, hamburgerIdSelected: id})
  }



  render(){
  return (
    <div className="App">
      <header className="App-header">
       
       
        <Slider></Slider>
         
      
      </header>
      <Switch>
        <Route exact path="/hamburgers" render={()=><Hamburgers></Hamburgers>}/>
        <Route exact path="/hamburger/:id" render={(match)=><HamburgerInfo {...match} getHamId={this.getHamId}></HamburgerInfo>}/>
      </Switch>
    </div>
  );
  }
}

export default App;
