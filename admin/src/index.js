import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserProvider from './components/context';
import App from './App';
import Home from './components/Home'
 import Profile from './components/Profile'
 import AddPost from "./components/AddPost"

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/addpost' exact component={AddPost}/>
    </Switch>
    
      <App/>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
