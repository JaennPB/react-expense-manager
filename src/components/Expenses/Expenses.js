import { useState } from 'react';

import ExpenseItem from './ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterDate = (date) => {
    setFilterYear(date);
  };

  const items = props.expenses.map((el) => {
    return (
      <ExpenseItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
      />
    );
  });

  return (
    <div className="expenses">
      <ExpensesFilter selectedYear={filterYear} onFilterDate={filterDate} />
      {items}
    </div>
  );
};

export default Expenses;
