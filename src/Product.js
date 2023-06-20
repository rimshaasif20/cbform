import React, { Component } from 'react';
import './Product.css';
import About from './Form/About';
const products = [
  {
    id: 1,
    emoji: '🍦',
    name: 'Ice cream',
    price: 5,
    decription: "Ice cream is a frozen dessert, typically made from milk or cream and flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together."
  },
  {
    id: 2,
    emoji: '🍩',
    name: 'Donuts',
    price: 2.5,
    description: "A donut, also called doughnut, is a kind of fried dough confectionery. Donuts are typically ring shaped with a hole in the middle. Bakers also make oval shaped donuts, which are often filled with custards or fruit preserves."
  },
  {
    id:3,
    emoji: '🍉',
    name: 'Watermelon',
    price: 4,
     description: "Watermelons are usually eaten fresh. They can be made into fresh juice or packed into tins or boxes. Watermelon juice is believed to have cooling properties and is thus a popular drink. However, it is the seeds that have popular local use not often found in the West. "
  },
   {
    id: 4,
    emoji: '🍔',
    name: 'Burgur',
    price: 10,
    description: "Shortened in length, the term Burger is used to describe a popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun. Although the most common Burger is made with meat, there are many alternatives that do not include meat, such as tofu or ground vegetables."
  },
   {
    id: 5,
    emoji: '🎂',
    name: 'Cake',
    price: 100,
     description: "A sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent (such as baking powder) : a flattened usually round mass of food that is baked or fried."
  },
   { id: 6,
    emoji: '🍜',
    name: 'Noodles',
    price: 50,
    description: "Noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth soups."
  },
   {
    id: 7,
    emoji: '🥪',
    name: 'Sandwich',
    price: 10,
     description: "Sandwich, in its basic form, slices of meat, cheese, or other food placed between two slices of bread. Although this mode of consumption must be as old as meat and bread, the name was adopted only in the 18th century for John Montagu, 4th earl of Sandwich."
  },
   {id: 8,
    emoji: '🥘',
    name: 'Biryani',
    price: 150,
     description: "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations."
  }
  , {
    id: 9,
    emoji: '🍟',
    name: 'French Fries',
    price: 50,
     description: "French fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. Fries are often salted and served with other items, including ketchup, mayonnaise, or vinegar."
  },
   {
    id: 10,
    emoji: '🍛',
    name: 'Fried Rice',
    price: 350,
     description: "Fried rice is a traditional Chinese preparation of cooked rice, vegetables, protein, soy sauce, and aromatics. The ingredients are stir-fried in a large pan or wok for even flavor distribution."
  }
];

export default class Product extends Component {

  state = {
    cart: [],
    total: 0,
     date: new Date()
  }
   componentWillMount() {
      console.log('Component will mount!')
  }
   componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
//  shouldComponentUpdate(nextProps, nextState) {
//     return this.state.list!==nextState.list
//   }
//   componentWillUpdate(nextProps, nextState) {
//     console.log('Component will update!');
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update!')
//   }
  tick() {
    this.setState({
      date: new Date()
    });
  }

 add = (product) => {

  // Check if the product is already in the cart
    this.setState(state => ({
      cart: [...state.cart, product],
      total: state.total + product.price
    }));
  
  }



  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions)
  }

 remove = () => {

   const { cart } = this.state;
  const lastProduct = cart[cart.length - 1];
  const lastProductPrice = lastProduct.price;

 this.setState(prevState => ({
    cart: prevState.cart.slice(0, -1),
    total: prevState.total - lastProductPrice
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
          <h1 className="card-header m-3 d-flex justify-content-center">
            Shopping Cart: {cart.length} total items.
          </h1>
          <h2 className='=card-header m-3 d-flex justify-content-center'>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        <div className="card-body d-flex justify-content-center">Total {this.getTotal()}</div>
           {/* <About
          about={cart.map((item) =>
            products.find((product) => product.name === item).description
          )}
        /> */}
        <div>{rows}</div>
      
      </div>
    );
  }
}