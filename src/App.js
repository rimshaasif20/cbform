import React from 'react';
import Login from './Login';
// import Login from './Login'; // Import the Login component
import './App.css'
import List from './List';
import SignUp from './Form/SignUp';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <SignUp />
        {/* <Login />  */}
        <List />
      </div>
    );
  }
}

export default App;
