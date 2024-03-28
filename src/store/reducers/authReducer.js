const initialState = {
    token: null,
    data:null
  
    
    // ... other state elements
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Login':
        return {
          ...state,
          token: action.payload.token,
          data:action.payload.data
      
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;