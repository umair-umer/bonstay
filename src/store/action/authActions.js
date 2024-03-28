export const LOGIN = 'Login';
export const LOGOUT = 'LOGOUT';
export const loginSuccess = (data) => ({
    type: LOGIN,
    payload: data,
  });
export const logout = () => {
    return { type: 'LOGOUT' };
  };
