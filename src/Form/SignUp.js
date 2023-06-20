import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import { addUsers, updateUser } from '../Redux/Actions';

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input className='form-control' placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError("required") && `${meta.label} is required`}
    </span>
  </div>
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    const { editingUser } = props;
    const initialValues = editingUser
    ?{
      id: editingUser[0].id,
      username: editingUser[0].username,
      password: editingUser[0].password
    }
    :
  {
    id: 0,
    username: "",
    password: ""
  }
  this.loginForm=FormBuilder.group(initialValues);
    // if(editingUser){
    //   this.loginForm = FormBuilder.group({
    //   id: [editingUser.id],
    //   username: [editingUser.username, Validators.required],
    //   password: [editingUser.password, Validators.required],
    //   rememberMe: [editingUser.rememberMe]
    // });} 
    // else{  
    //   this.loginForm = FormBuilder.group({
    //   username: ["", Validators.required],
    //   password: ["", Validators.required],
    //   rememberMe: false
    // });
  }
    componentDidUpdate(prevProps) {
    const { editingUser } = this.props;
    if (editingUser !== prevProps.editingUser) {
      if (editingUser != undefined) {
        const { id, username, password } = editingUser[0];
        this.loginForm.patchValue({ id, username, password });
      } else {
        this.loginForm.reset();
      }
    }
  }

  

  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    const id = Date.now();
    const { addUsers, updateUser, editingUser } = this.props;
    console.log("Form values", this.loginForm.value);
    if (editingUser) {
      const updatedValues = { ...this.loginForm.value, id: editingUser[0].id };
      updateUser(updatedValues);
    } else {
      const newUser={...this.loginForm.value,id}
      addUsers(newUser);
    }
    this.loginForm.reset();
  }

 
  render() {
    return (
      <>
        <div className='container d-flex justify-content-center mt-5' >
          <div className='form p-4' style={{ borderRadius: '0.5rem', backgroundColor: 'grey' }}>
            <h1 style={{ color: 'white' }}>SignUp Form</h1>
            <FieldGroup
              control={this.loginForm}
              render={({ invalid }) => (
                <form onSubmit={this.handleSubmit} className='form p-4'>
                  <div className='form-group d-flex justify-content-between'>
                    <FieldControl
                      className='mb-3'
                      name="username"
                      render={TextInput}
                      meta={{ label: "Username" }}
                    />
                  </div>
                  <div className='form-group d-flex justify-content-between'>
                    <FieldControl
                      className='mb-3'
                      name="password"
                      render={TextInput}
                      meta={{ label: "Password" }}
                    />
                  </div>
                  <div className='form-group d-flex justify-content-center '>
                    <FieldControl
                      className='mb-3'
                      name="rememberMe"
                      render={({ handler }) => (
                        <div>
                          <input {...handler("checkbox")} />
                        </div>
                      )}
                    />
                  </div>
                  <button
                    className='btn btn-success'
                    type="submit"
                    disabled={invalid}
                  >

                    Submit
                  </button>
                </form>
              )}
            />
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
