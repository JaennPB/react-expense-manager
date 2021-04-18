import * as actionTypes from './actionTypes';

export const showFilters = () => {
  return {
    type: actionTypes.SHOW_FILTERS,
  };
};

export const filterYear = (year) => {
  return {
    type: actionTypes.FILTER_YEAR,
    year: year,
  };
};

export const filterMonth = (month) => {
  return {
    type: actionTypes.FILTER_MONTH,
    month: month,
  };
};

export const filterDataType = (dataType) => {
  return {
    type: actionTypes.FILTER_DATA_TYPE,
    dataType: dataType,
  };
};
