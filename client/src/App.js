import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';


import Hamburgers from "./components/Hamburgers"
class App extends Component {

  constructor(){
   super()




  }




  render(){
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
         
      
      </header>
      <Switch>
        <Route exact path="/hamburgers" render={()=><Hamburgers></Hamburgers>}/>
      </Switch>
    </div>
  );
  }
}

export default App;
