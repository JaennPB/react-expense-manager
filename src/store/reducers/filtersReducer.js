import * as actionTypes from '../actions/actionTypes';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const initialState = {
  year: new Date().getFullYear().toString(),
  month: months[new Date().getMonth()],
  dataType: 'expense',
  showFilters: false,
};

const filterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.SHOW_FILTERS:
      return {
        ...state,
        showFilters: !state.showFilters,
      };
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
