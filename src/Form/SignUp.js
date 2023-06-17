import React, { Component } from 'react';
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
    <input className='form-control' placeholder={`Enter ${meta.label}`} {...handler()}/>
    <span>
        {touched
        && hasError("required")
        && `${meta.label} is required`}
    </span>
  </div>  
)
 class SignUp extends Component {
    loginForm = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        rememberMe: false
    });
    handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        const values = {
            ...this.loginForm.value,
            id: id
          };
        const { addUsers ,updateUser,editingUser} = this.props;
        console.log("Form values", values);
        if(editingUser){
          const updatedValues={...values, id: editingUser.id};
          updateUser(updatedValues);
        }
        else{
           
        addUsers(values);
        }
        this.loginForm.reset();
      }
      componentDidUpdate(prevProps){
        const{editingUser}= this.props;
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
            }
      }
    }
      
    render() {
        return (
            <>
           
            <div className='container d-flex justify-content-center mt-5 '   >
                <div className='form  p-4 'style={{borderRadius: '0.5rem', backgroundColor: 'grey'}}>
                <h1 style={{color: 'white'}}>SignUp Form</h1>

              <FieldGroup
                control={this.loginForm}
                render={({ get, invalid }) => (
                  <form onSubmit={this.handleSubmit} className='form  p-4'>
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
                      render={({handler}) => (
                        <div>
                          <input {...handler("checkbox")}/>
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