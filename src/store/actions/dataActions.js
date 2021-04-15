import * as actionTypes from './actionTypes';

export const addExpense = (data) => {
  return {
    type: actionTypes.ADD_EXPENSE,
    payload: data,
  };
};
