import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar  variant="dark" className='container mt-3 p-3 bg-dark ' >
          <Navbar.Brand  to="/"></Navbar.Brand>
          
            <Nav.Link >
              <NavLink to="/" className="nav" style={{fontSize: 'bold',fontSize: '1rem', color: 'white'}}>SignUp</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/list" className="nav "style={{fontSize: 'bold',fontSize: '1rem', color: 'white'}}>Users List</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/product" className="nav" style={{fontSize: 'bold',fontSize: '1rem', color: 'white'}}>Products</NavLink>
            </Nav.Link>
        <Nav.Link>
              <NavLink to="/about" className="nav" style={{fontSize: 'bold',fontSize: '1rem', color: 'white'}}>About</NavLink>
            </Nav.Link>
        
        </Navbar>
      </div>
    );
  }
}

export default Navigate;
