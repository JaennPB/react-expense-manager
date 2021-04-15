import { useState } from 'react';
import { connect } from 'react-redux';

import DataItem from './DataItem/DataItem';
import DataFilter from './DataFilter/DataFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import styles from './Data.module.css';

const Data = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterDate = (date) => {
    setFilterYear(date);
  };

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let items = filteredExpenses.map((el) => {
    return (
      <DataItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
      />
    );
  });

  if (filteredExpenses.length === 0) {
    items = <p className={styles.fallback}>No data from this year...</p>;
  }

  return (
    <div className={styles.expenses}>
      <DataFilter selectedYear={filterYear} onFilterDate={filterDate} />
      <ExpensesChart expenses={filteredExpenses} />
      {items}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenseData: state.expenseData,
  };
};

export default connect(mapStateToProps)(Data);
