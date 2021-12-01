import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Explorer from './routes/Explorer';
import Wallet from './routes/Wallet';
import Create from './routes/Create';
import Cookbook from './routes/Cookbook';
import Navbar from './routes/Navbar';
import Footer from './routes/Footer';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route exact path='/' render={props => <Explorer {...props} />} />
      <Route exact path='/wallet' render={props => <Wallet {...props} />} />
      <Route exact path='/cookbook' render={props => <Cookbook {...props} />} />
      <Route exact path='/create' render={props => <Create {...props} />} />
    </Switch>
    <Footer />
  </BrowserRouter>
  ,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
