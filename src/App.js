import React from 'react';
import Header from './components/Header';
import ListContainer from './containers/ListContainer';
import './App.css';

/*
 * The Etherium Dashboard Appication
 */
const title = 'Etherium Dashboard';
const App = () => (
  <div className="App">
    <h1 className="App-title">
      {title}
    </h1>
    <Header />
    <ListContainer />
  </div>
);


export default App;
