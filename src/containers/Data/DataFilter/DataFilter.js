import { connect } from 'react-redux';

import * as actions from '../../../store/actions/indexActions';

import styles from './DataFilter.module.css';

const DataFilter = (props) => {
  const changeYearHandler = (e) => {
    props.filterYear(e.target.value);
  };

  const changeMonthHandler = (e) => {
    props.filterMonth(e.target.value);
  };

  const changeDataTypeHandler = (e) => {
    props.filterDataType(e.target.value);
  };

  return (
    <div className={styles.dataFilters}>
      <label>Filter by:</label>
      <div className={styles.filters}>
        <div>
          <label>Year</label>
          <select onChange={changeYearHandler} value={props.year}>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div>
          <label>Month</label>
          <select onChange={changeMonthHandler} value={props.month}>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <div>
          <label>Type of data</label>
          <select onChange={changeDataTypeHandler} value={props.dataType}>
            <option value="expenses">Expenses</option>
            <option value="incomes">Incomes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    year: state.filters.year,
    month: state.filters.month,
    dataType: state.filters.dataType,
  };
};

export default connect(mapStateToProps, actions)(DataFilter);
