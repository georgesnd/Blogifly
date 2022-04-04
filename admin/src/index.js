import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserProvider from './components/context';
import App from './App';
import Home from './components/Home';
import AddPost from './components/AddPost';
import Profile from './components/Profile';

 

ReactDOM.render( 
  <React.StrictMode>
  <UserProvider>
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/addpost' exact component={AddPost}/>
    </Switch>
    
      <App/>
    </BrowserRouter>
  </UserProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);
