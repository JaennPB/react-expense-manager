import { useState } from 'react';

import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import styles from './Expenses.module.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterDate = (date) => {
    setFilterYear(date);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let items = filteredExpenses.map((el) => {
    return (
      <ExpenseItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
      />
    );
  });

  if (filteredExpenses.length === 0) {
    items = <p className="expenses__fallback">No expenses from this year</p>;
  }

  return (
    <div className={styles.expenses}>
      <ExpensesFilter selectedYear={filterYear} onFilterDate={filterDate} />
      <ExpensesChart expenses={filteredExpenses} />
      {items}
    </div>
  );
};

export default Expenses;
