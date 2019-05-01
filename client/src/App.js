import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';


import Hamburgers from "./components/Hamburgers"
import Slider from "./components/Slider"
class App extends Component {

  constructor(){
   super()




  }




  render(){
  return (
    <div className="App">
      <header className="App-header">
       
       
        <Slider></Slider>
         
      
      </header>
      <Switch>
        <Route exact path="/" render={()=><Hamburgers></Hamburgers>}/>
      </Switch>
    </div>
  );
  }
}

export default App;
