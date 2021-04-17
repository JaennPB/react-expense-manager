import * as actionTypes from '../actions/actionTypes';

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
const initialState = {
  year: new Date().getFullYear(),
  month: months[new Date().getMonth()],
  dataType: 'expenses',
};

const filterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.FILTER_YEAR:
      return {
        ...state,
        year: actions.year,
      };
    case actionTypes.FILTER_MONTH:
      return {
        ...state,
        month: actions.month,
      };
    case actionTypes.FILTER_DATA_TYPE:
      return {
        ...state,
        dataType: actions.dataType,
      };
    default:
      return state;
  }
};

export default filterReducer;
