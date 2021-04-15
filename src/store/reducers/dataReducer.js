import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expenseData: [],
};

const dataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.ADD_EXPENSE:
      return {
        ...state,
        expenseData: state.expenseData.concat({
          title: actions.payload.title,
          amount: actions.payload.amount,
          date: actions.payload.date,
          id: Math.random().toString(),
        }),
      };
    default:
      return state;
  }
};

export default dataReducer;
