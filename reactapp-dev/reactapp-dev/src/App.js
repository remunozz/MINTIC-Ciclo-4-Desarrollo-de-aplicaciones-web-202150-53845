import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Loading} from './components/Loading';

import List from './components/List';
import ProductHook from './components/ProductHook';
import Item from './components/Item';
import EditForm from './components/EditForm';
class App extends Component {
  render(){
    return ( <div className = "App" >
        <header className = "App-header" >
        <List />
        <ProductHook/>
        </header>
         </div>
    );
    }
}

export default App;