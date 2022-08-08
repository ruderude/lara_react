import React from "react";
import {
  BrowserRouter,
  Switch ,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Tasks from './pages/tasks';
import Help from './pages/help';
import Login from './pages/login';
import Header from './components/layouts/Header';


const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch >
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;