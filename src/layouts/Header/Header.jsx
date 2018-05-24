import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './style.scss';

class Home extends React.Component {
  render() {
    return (
      <div id="headerContainer">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#/">React Webpack</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#/home">
                HOME
              </NavItem>
              <NavItem eventKey={2} href="#/about">
                ABOUT
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Home;
