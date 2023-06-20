export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const EDIT_USER='EDIT-USER';

export const addUsers = (user) => {
  debugger;
  return {
    type: ADD_USER,
    payload: user
  };
};

export const userToBeUpdated = (id)  => {
  return{
    type: EDIT_USER,
    payload: id
  };
};

export const updateUser = (user)  => {
  return{
    type: UPDATE_USER,
    payload: user
  };
};
export const deleteUser = (id)  =>{
  return{
    type: DELETE_USER,
    payload: id
  };
};


