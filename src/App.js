import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import About from "./components/About";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import GithubContextProvider from "./context/GithubContext";
import UserDetail from "./components/Users/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GithubContextProvider>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path='/user/:login' component={UserDetail} />
            <Route path="*" component={Page404} />
          </Switch>
        </GithubContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
