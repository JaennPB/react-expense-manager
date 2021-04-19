import * as actionTypes from '../actions/actionTypes';

const intialState = {
  authStart: false,
};

const authReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        authStart: true,
      };
    default:
      return state;
  }
};

export default authReducer;
