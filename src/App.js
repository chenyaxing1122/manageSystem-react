import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from './login/Index'
import Home from './home/Index'
import { authLogin } from './utils/common'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={"/"} exact render={(props) => {
              return <Redirect to="/home"></Redirect>
            }}></Route>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/home"} render={(props) => {
              if (!authLogin()) {
                return <Redirect to="/login"></Redirect>
              }
              return <Home {...props}></Home>
            }}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
