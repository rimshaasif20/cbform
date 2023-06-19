import { ADD_USER, UPDATE_USER, DELETE_USER,  EDIT_USER } from './Actions';

const initialState = {
    users: [], // Initialize as an empty array
    editingUser: null,
  };
  const UserReducer = (state = initialState, action) => {
 
    switch (action.type) {
       
      case ADD_USER:
        debugger;
        return {
          ...state,
          users: [...state.users, action.payload],
        };
        case EDIT_USER:
          debugger;
        return {
          ...state,
          editingUser:  action.payload,
        };
      case  UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
          editingUser: null
        };
     case DELETE_USER:
          return {
            ...state,
            users: state.users.filter((user) => user.id !== action.payload),
          };
        
        
      default:
        return state;
    }
  };
  
  export default UserReducer;
    