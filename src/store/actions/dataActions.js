import * as actionTypes from './actionTypes';

export const addExpense = (data) => {
  return {
    type: actionTypes.ADD_EXPENSE,
    payload: data,
  };
};

export const addIncome = (data) => {
  return {
    type: actionTypes.ADD_INCOME,
    payload: data,
  };
};

export const addingExpense = () => {
  return {
    type: actionTypes.ADDING_EXPENSE,
  };
};

export const addingIncome = () => {
  return {
    type: actionTypes.ADDING_INCOME,
  };
};

export const submitOrCancel = () => {
  return {
    type: actionTypes.SUBMIT_OR_CANCEL,
  };
};
