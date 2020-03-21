import React from 'react';
import AppMenu from './menu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GraphQL, Home } from '../../packages'

import './index.scss'
const { memo } = React;

const Content = memo(() => {
  return (
    <Router>
      <div className='content-wrap'>
        <div className='content content-left'>
          <AppMenu />
        </div>
        <div className='content content-right'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/graphql">
              <GraphQL />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
})

export default Content;