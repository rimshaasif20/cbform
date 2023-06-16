import React from 'react';
import Login from './Login';
// import Login from './Login'; // Import the Login component
import './App.css'
import List from './List';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>SignUp Form</h1>
        <Login /> {/* Render the Login component */}
        <List />
      </div>
    );
  }
}

export default App;
