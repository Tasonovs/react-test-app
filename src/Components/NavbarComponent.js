import React from 'react'
import { Form, FormControl, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import * as FA from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink, Link } from "react-router-dom";

export default function NavbarComponent(props) {
    return (
        <div>
            <Navbar bg={props.theme} variant={props.theme} expand="lg" className="d-flex align-items-start flex-row bd-highlight mb-3">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon size="lg" className="spin" icon={FA.faMoneyBillAlt} />
                    &emsp;FounDing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-5 ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link inactive" activeClassName="nav-link active" exact={true} to="/">Home</NavLink>
                        <NavLink className="nav-link inactive" activeClassName="nav-link active" exact={true} to="/user">User</NavLink>
                        <NavLink className="nav-link inactive" activeClassName="nav-link active" exact={true} to="/project">Project</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                    <Form inline>
                        <FormControl type="text" placeholder="🔍 Search" className="mr-sm-2" />
                    </Form>
            </Navbar>
        </div>
    )
}
