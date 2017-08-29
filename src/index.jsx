import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
//import TopHeader from './components/layout/header/index.jsx';
import Layout from './components/layout/index.jsx';

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>,
root);
