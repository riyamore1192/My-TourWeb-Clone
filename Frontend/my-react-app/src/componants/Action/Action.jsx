// import { LOGIN_USER, LOGOUT_USER, SELECT_TOUR, FETCH_TOURS } from './Actiontype';

import { LOGIN_FAILURE,LOGIN_SUCCESS } from "./Actiontype";

// export const loginUser = (user) => ({
//   type: LOGIN_USER,
//   payload: user,
// });

// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });

// export const fetchTours = (tours) => ({
//   type: FETCH_TOURS,
//   payload: tours,
// });

// export const selectTour = (tours) => ({
//   type: SELECT_TOUR,
//   payload: tours,
// });

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};