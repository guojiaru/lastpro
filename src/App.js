import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { ListContainer as List } from 'pages/list'
import { SearchContainer as Search } from 'pages/search'
import { Route, Switch, Redirect } from 'react-router-dom'
import {SearchBar} from 'antd-mobile'
import {Home} from 'pages/home'

class App extends Component {
  render() {
    return (
    //  <div>
    //    <SearchBar placeholder="Search" maxLength={8} />
    //  </div>

     <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route exact path='/home' component={Home}/>
        <Route exact  path="/list" component={List} />
        <Route exact  path="/search" component={Search} />
        
      </Switch>
      
    );
  }
}

export default App;
