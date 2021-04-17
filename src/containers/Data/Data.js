import { useState } from 'react';
import { connect } from 'react-redux';

import DataItem from './DataItem/DataItem';
import DataFilter from './DataFilter/DataFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import styles from './Data.module.css';

const Data = (props) => {
  //TODO: move this to redux
  const [filterYear, setFilterYear] = useState('2021');

  const filterDate = (date) => {
    setFilterYear(date);
  };
  //TODO: move this to redux

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filteredIcomes = props.incomeData.filter((income) => {
    return income.date.getFullYear().toString() === filterYear;
  });

  let expenses = filteredExpenses.map((el) => {
    return (
      <DataItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
        isExpense
      />
    );
  });

  let incomes = filteredIcomes.map((el) => {
    return (
      <DataItem
        title={el.title}
        amount={el.amount}
        date={el.date}
        key={el.id}
        isIncome
      />
    );
  });

  let noData;
  if (expenses.length === 0 && incomes.length === 0) {
    noData = <p className={styles.fallback}>No data from this year...</p>;
  }

  return (
    <div className={styles.expenses}>
      <DataFilter selectedYear={filterYear} onFilterDate={filterDate} />
      <ExpensesChart expenses={filteredExpenses} />
      {expenses}
      {incomes}
      {noData}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenseData: state.expenseData,
    incomeData: state.incomeData,
  };
};

export default connect(mapStateToProps)(Data);
