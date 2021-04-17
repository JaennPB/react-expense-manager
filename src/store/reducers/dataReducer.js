import * as actionTypes from '../actions/actionTypes';

const initialState = {
  expenseData: [],
  incomeData: [],
  addingExpense: false,
  addingIncome: false,
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
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        incomeData: state.incomeData.concat({
          title: actions.payload.title,
          amount: actions.payload.amount,
          date: actions.payload.date,
          id: Math.random().toString(),
        }),
      };
    case actionTypes.ADDING_EXPENSE:
      return {
        ...state,
        addingExpense: true,
      };
    case actionTypes.ADDING_INCOME:
      return {
        ...state,
        addingIncome: true,
      };

    case actionTypes.SUBMIT_OR_CANCEL:
      return {
        ...state,
        addingExpense: false,
        addingIncome: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
