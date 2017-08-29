import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Accounts from './components/Accounts/Accounts.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Layout from './components/layout/index.jsx';

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    <IndexRoute component={DashBoard}></IndexRoute>
    <Route path="Accounts" component={Accounts} />
    </Route>
  </Router>,
root);
