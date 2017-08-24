import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import './css/style.css';
import DashBoard from './components/dashBoard/index.jsx';

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={DashBoard}>
    </Route>
  </Router>,
root);