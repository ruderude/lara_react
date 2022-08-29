import React from "react";
import {
  BrowserRouter,
  Switch ,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import { Tasks, Tasks2 } from './pages/tasks';
import BaseTodos from './pages/todo/BaseTodos';
import Help from './pages/help/Help';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import Header from './components/layouts/Header';


const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <main className="container mx-auto text-center">
          <Switch >
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/todos">
              <BaseTodos />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
    </BrowserRouter>
  );
};

export default Router;