import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem} from 'reactstrap';
import Search from './Search';
import Home from './Home';


class App extends Component {
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
  render(){
    return (
    <Router>
      <div id="background">
      <div className="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand >
          <Link className="text" to="/">Home</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}  />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink>
                <Link className="text" to="/search">search</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}
}

export default App;
