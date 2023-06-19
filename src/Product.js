import React, { Component } from 'react';
import './Product.css';
const products = [
  {
    emoji: '🍦',
    name: 'Ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'Donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'Watermelon',
    price: 4
  },
   {
    emoji: '🍔',
    name: 'Burgur',
    price: 10
  },
   {
    emoji: '🎂',
    name: 'Cake',
    price: 100
  },
   {
    emoji: '🍜',
    name: 'Noodles',
    price: 50
  },
   {
    emoji: '🥪',
    name: 'Sandwich',
    price: 10
  },
   {
    emoji: '🥘',
    name: 'Biryani',
    price: 150
  }
  , {
    emoji: '🍟',
    name: 'Fries',
    price: 50
  },
   {
    emoji: '🍛',
    name: 'Fried Rice',
    price: 350
  }
];

export default class Product extends Component {

  state = {
    cart: [],
    total: 0
  }

  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price
    }))
  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions)
  }

 remove = () => {
  const lastProduct = this.state.cart[this.state.cart.length - 1];
  const lastProductPrice = products.find(product => product.name === lastProduct)?.price || 0;

  this.setState(state => ({
    cart: state.cart.slice(0, -1),
    total: state.total - lastProductPrice
  }));
}


  render() {
      const { cart } = this.state;

    const rows = [];
    for (let i = 0; i < products.length; i += 5) {
      const rowProducts = products.slice(i, i + 5);
      const cards = rowProducts.map((product) => (
        <div
          className="card border-info mb-3"
          style={{ maxWidth: '20rem', margin: '10px' }}
          key={product.name}
        >
          <div>
            <div className="card-text" style={{ fontSize: '150px' }}>
              <span role="img" aria-label={product.name}>
             
                {product.emoji}
              </span>
            </div>
          </div>
          <div colspan={2}>
            <button
              className="btn btn-info mr-1 mb-1"
              onClick={() => this.add(product)}
            >
              Add
            </button>
            <button
              className="btn btn-danger ml-1 mb-1"
              onClick={this.remove}
            >
              Remove
            </button>
          </div>
        </div>
      ));

      rows.push(
        <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
          {cards}
        </div>
      );
    }

    return (
      <div>
        <div>
          <h1 className="card-header m-3">
            Shopping Cart: {cart.length} total items.
          </h1>
        </div>
        <div className="card-body size-4">Total {this.getTotal()}</div>

        <div>{rows}</div>
      </div>
    );
  }
}
  
