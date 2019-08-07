import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, Route, Redirect } from "react-router-dom";

import "./TopMenu.css";
import Login from "./Login.js";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  Index() {
    return <h1>Home</h1>;
  }
  History() {
    return <h1>Lịch sử</h1>;
  }
  Aboutus() {
    return <h1>Giang</h1>;
  }
  Login() {
    return <h1>Form</h1>;
  }

  isLoggedIn() {

  }

  requireLogin(nextState, replace, next) {
    replace("/");
  }

  render() {
    return (
      <div style={{ color: "#333" }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink
              style={{
                margin: "0px",
                padding: "0px"
              }}
            >
              <div className="">
                <Link className="d-flex navbar-brand " to="/">
                  <img
                    src="https://image.flaticon.com/icons/svg/854/854878.svg"
                    alt="icon"
                    width="32"
                    height="32"
                    className="ml-3"
                  />
                </Link>
              </div>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/list">Danh sách</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/history">Lịch sử</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/aboutus">About Us</Link>
                </NavLink>
              </NavItem>
              <NavLink>
                <Link to="/login">Đăng nhập</Link>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <Route path="/" exact component={this.Index} />
        <Route path="/list" exact component={this.History} />
        <Route
          exact
          path="/history"
          render={props =>
            this.isLoggedIn() ? <Redirect to="/login" /> : this.History
          }
        />
        <Route path="/aboutus" exact component={this.Aboutus} />
        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}
