import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from 'react-reactive-form';
import { addUsers, updateUser } from './Redux/Actions';

class Login extends Component {
 

    loginForm = FormBuilder.group({
      id:0,
      username: '',
      fname: '',
      lname: '',
      password: '',
      rememberMe: false
    });
  

 handleSubmit = (e) => {
  debugger;
  const id=Date.now();
  e.preventDefault();
  const { addUsers, updateUser, editingUser } = this.props;
  debugger;
  const { username, fname, lname, password, rememberMe } = this.loginForm.value;
//const{editingUser}=this.props;
  if (editingUser) {
   // const {  updateUser } = this.props;
    const updatedUser = {
      id: editingUser.id,
      username,
      fname,
      lname,
      password,
      rememberMe
    };
    updateUser(updatedUser);
  } else {
    //const {addUsers}=this.props;
    const user = {
      id,
      username,
      fname,
      lname,
      password,
      rememberMe
    };
    addUsers(user);
  }

  this.loginForm.reset(); // Reset the form after submitting
};



//   componentDidUpdate(prevProps) {
//   const { editingUser } = this.props;
//   if (editingUser !== prevProps.editingUser) {
//     if (editingUser) {
//       this.loginForm.setValue({  // Use setValue instead of patchValue
//         id: editingUser.id,
//         username: editingUser.username,
//         fname: editingUser.fname,
//         lname: editingUser.lname,
//         password: editingUser.password,
//         rememberMe: editingUser.rememberMe
//       });
//     } else {
//       this.loginForm.reset();
//     }
//   }
// }

  componentDidUpdate(prevProps) {
    const { editingUser } = this.props;
    if (editingUser !== prevProps.editingUser) {
      if (editingUser) {
        this.loginForm.patchValue({
          id: editingUser.id,
          username: editingUser.username,
          fname: editingUser.fname,
          lname: editingUser.lname,
          password: editingUser.password,
          rememberMe: editingUser.rememberMe
        });
      } else {
        const id=Date.now()
         this.loginForm.patchValue({
          id: id,
          username: '',
          fname: '',
          lname: '',
          password: '',
          rememberMe: false
        });
      }
    }
  }

  render() {

    return (
     
      <div className="container " style={{ display: 'flex', justifyContent: 'center'}}>
      
        <div className="form bg-info p-3" style={{ width: '350px' ,border: '0.1rem solid black', borderRadius: '1rem' }}>
          <FieldGroup className=""
            control={this.loginForm}
            render={({ invalid }) => (
              <form onSubmit={this.handleSubmit} className="form p-4">
                   <div className='form-group d-flex justify-content-between '>
                <label htmlFor="username"><strong>Username:</strong></label>
                <FieldControl
                  name="username"
                  className="mb-3"
                  options={{ validators: [Validators.required, Validators.email]  }}
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <input className='form-control' {...handler()} />
                      <span>
                        {touched && hasError('required') && 'Username is required'}
                      </span>
                    </div>
                  )}
                />
              </div>

                   <div className='form-group d-flex justify-content-between '>
                <label htmlFor="fname"><strong>First Name:</strong></label>
                <FieldControl
                  name="fname"
                                    className="mb-3"

                  options={{ validators: Validators.required }}
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <input className='form-control' {...handler()} />
                      <span>
                        {touched && hasError('required') && 'First name is required'}
                      </span>
                    </div>
                  )}
                />
              </div>

                   <div className='form-group d-flex justify-content-between '>
                <label htmlFor="lname"><strong>Last Name:</strong></label>
                <FieldControl
                  name="lname"
                                    className="mb-3"

                  options={{ validators: Validators.required }}
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <input className='form-control' {...handler()} />
                      <span>
                        {touched && hasError('required') && 'Last name is required'}
                      </span>
                    </div>
                  )}
                />
              </div>

                   <div className='form-group d-flex justify-content-between '>
                <label htmlFor="password"><strong>Password:</strong></label>
                <FieldControl
                  name="password"
                                    className="mb-3"

                  options={{validators: [Validators.required, Validators.pattern('^[0-9]+$')] }}
                  render={({ handler, touched, hasError }) => (
                    <div>
                      <input className='form-control' {...handler()} />
                      <span>
                        {touched && hasError('required') && 'Password is required'}
                      </span>
                    </div>
                  )}
                />
              </div>

                   <div className='form-group d-flex justify-content-center '>
                <label htmlFor="rememberMe" className='ml-3 mr-3'><strong>Remember Me:</strong></label>
                <FieldControl
                  name="rememberMe"
                                    className="mb-3"

                  render={({ handler }) => (
                    <div>
                      <input className='form-control' {...handler('checkbox')} />
                    </div>
                  )}
                />
              </div>

                <button type="submit" disabled={invalid}                   className="btn btn-success mb-3"
>
                  Submit
                </button>
              </form>
            )}
          />
        </div>
        
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editingUser: state.users.editingUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (user) => dispatch(addUsers(user)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
