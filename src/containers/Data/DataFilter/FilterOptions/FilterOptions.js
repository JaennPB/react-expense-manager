import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/indexActions';

import styles from './FilterOptions.module.css';

const FilterOptions = (props) => {
  return (
    <div className={styles.filters}>
      <div>
        <label>Year</label>
        <select
          onChange={(e) => props.filterYear(e.target.value)}
          value={props.year}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <label>Month</label>
        <select
          onChange={(e) => props.filterMonth(e.target.value)}
          value={props.month}
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div>
        <label>Type of data</label>
        <select
          onChange={(e) => props.filterDataType(e.target.value)}
          value={props.dataType}
        >
          <option value="expense">Expenses</option>
          <option value="income">Incomes</option>
        </select>
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

export default connect(mapStateToProps, actions)(FilterOptions);
