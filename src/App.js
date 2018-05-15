import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
    welcome: "Hi ",
    Age: Math.random() * 10
};

const user = (state = defaultState, action) => {
  switch(action.type){
    case 'Name':
      return {
        ...state, Subash: "Hi Subash"
      };
    case 'Unknow':
      return{
        ...state, Who: 'Unknown'
      };
    default:
      return state;
  }
};
const store = createStore(user) ;
console.log(store.getState());

store.dispatch({
  type: 'Name'
})
console.log(store.getState());

