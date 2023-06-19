import React, { Component } from 'react';
import SignUp from './Form/SignUp';
import List from './List';
import Product from './Product';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'users'
    };
  }

  handleItemClick = (item, event) => {
    event.preventDefault();
    this.setState({ activeItem: item });
  }

  renderActiveComponent = () => {
    const { activeItem } = this.state;

    if (activeItem === 'users') {
      return <SignUp />;
    } else if (activeItem === 'list') {
      return <List />;
    }
    else if(activeItem==='product'){
        return <Product />
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info w-78 ml-5 mr-5 p-4 mt-2">
          <ul className="navbar-nav ml-5 " style={{fontWeight: 'bold', fontSize: '1.5rem'}}>
            <li className={`nav-item ${activeItem === 'users' ? 'active' : ''}`}>
              <a className="nav-link" onClick={(event) => this.handleItemClick('users', event)} href="/">SignUp</a>
            </li>
            <li className={`nav-item ${activeItem === 'list' ? 'active' : ''}`}>
              <a className="nav-link" onClick={(event) => this.handleItemClick('list', event)} href="/list">UsersList</a>
            </li>
             <li className={`nav-item ${activeItem === 'product' ? 'active' : ''}`}>
              <a className="nav-link" onClick={(event) => this.handleItemClick('product', event)} href="/product">Products</a>
            </li>
          </ul>
        </nav>
        {this.renderActiveComponent()}
      </div>
    );
  }
}

export default Navbar;
