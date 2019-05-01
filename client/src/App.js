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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
      <Switch>
        <Route exact path="/hamburgers" render={()=><Hamburgers></Hamburgers>}/>
      </Switch>
    </div>
  );
  }
}

export default App;
