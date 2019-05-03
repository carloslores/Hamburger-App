import React, { Component } from 'react';

import './App.css';
import { Switch, Route} from 'react-router-dom';



import Hamburgers from "./components/Hamburgers"
import HamburgerInfo from "./components/HamburgerInfo"
import Header from "./components/Header"
import Slider from "./components/Slider"
import Apiservice from "./service/apiservice"
class App extends Component {

  constructor(){
   super()
   this.state ={hamburgerIdSelected: undefined}

   this.serviceHamburgers = new Apiservice()

  }
  



  render(){
    
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
           </header>
              <Switch>
                <Route exact path="/" render={()=><Slider></Slider>}/>
                <Route exact path="/hamburgers" render={()=><Hamburgers></Hamburgers>}/>
                <Route exact path="/hamburger/:id" render={(match)=><HamburgerInfo {...match} ></HamburgerInfo>}/>
              </Switch>
           </div>
  );
  }
}

export default App;
