import styles from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const changeYearHandler = (e) => {
    props.onFilterDate(e.target.value);
  };

  return (
    <div className={styles.expensesFilter}>
      <div className={styles.control}>
        <label>Filter by year</label>
        <select onChange={changeYearHandler} value={props.selectedYear}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
