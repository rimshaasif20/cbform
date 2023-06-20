import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Form/SignUp';
import List from './List';
import Product from './Product';
import Navigate from './Navigate';
import About from './Form/About';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navigate />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/:id" element={<SignUp />} />
          <Route path="list" element={<List />}/>
          <Route path="product" element={<Product />} />
           <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
