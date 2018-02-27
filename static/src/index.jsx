import React from 'react';
import {render} from 'react-dom';
import App from './apps/app.jsx';
import Login from './apps/login.jsx';

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";


const RouteMap=()=>(
  <Router>
    <div>
      <Switch>
          <Route extact path='/login' component={Login}></Route>
          <Route path='/' component={App}></Route>
     </Switch>
    </div>
  </Router>
  );

render(<RouteMap/>, document.getElementById('app'));
