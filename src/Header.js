import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <div>
      <Navbar className="navbar-nav ml-5 " style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        <Nav className="navbar navbar-expand-lg navbar-light bg-info w-78 ml-5 mr-5 p-4 mt-2">
          
           
            <Nav.Link>
              <NavLink className="nav"   to="/">SignUp</NavLink>
            </Nav.Link>
           
           
            <Nav.Link>
              <NavLink className="nav"  to="/list">UsersList</NavLink>
            </Nav.Link>
           
           
            <Nav.Link>
              <NavLink className="nav"  to="/product">Products</NavLink>
           </Nav.Link>
          
        </Nav>
        </Navbar>
      </div>
    );
  }
}
  

export default Header;
