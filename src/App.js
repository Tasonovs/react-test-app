import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import HomePage from "./Components/Home/HomePage";
import UserPage from "./Components/User/UserPage";
import ProjectPage from "./Components/Project/ProjectPage";

import { Form, FormControl, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import * as FA from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <NavbarComponent theme="dark"></NavbarComponent>
      </header>

      <main className="container">
        <Switch>
          <Route path="/" component={HomePage} exact="true" />
          <Route path="/user" component={UserPage} />
          <Route path="/project" component={ProjectPage} />
        </Switch>
      </main>
    </BrowserRouter>);
}
