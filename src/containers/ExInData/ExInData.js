import { useState } from 'react';

import ExInItem from './ExInItem/ExInItem';
import ExInFilter from './ExInFilter/ExInFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import styles from './ExInData.module.css';

const ExInData = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterDate = (date) => {
    setFilterYear(date);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let items = filteredExpenses.map((el) => {
    return (
      <ExInItem
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
      <ExInFilter selectedYear={filterYear} onFilterDate={filterDate} />
      <ExpensesChart expenses={filteredExpenses} />
      {items}
    </div>
  );
};

export default ExInData;
