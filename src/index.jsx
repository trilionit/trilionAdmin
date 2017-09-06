import React from 'react';
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Accounts from './components/accounts/index.jsx';
import NewAccounts from './components/accounts/newAccount.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Layout from './components/layout/index.jsx';
require('./css/style.css');
const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    <IndexRoute component={DashBoard}></IndexRoute>
    <Route path="Accounts" component={Accounts} />
    <Route path="/newAccount" component={NewAccounts} />
    </Route>
  </Router>,
root);
