import { connect } from 'react-redux';

import DataItem from './DataItem/DataItem';
import DataFilter from './DataFilter/DataFilter';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import styles from './Data.module.css';

const Data = (props) => {
  const filteredExpenses = props.expenseData.filter((expense) => {
    return (
      (expense.type === props.filteredData &&
        expense.date.getFullYear().toString() === props.filteredYear &&
        expense.date.toLocaleString('default', { month: 'long' }) ===
          props.filteredMonth) ||
      // FIXME: fix 'ALL' category
      (props.filteredYear === 'All' &&
        props.filteredMonth === 'All' &&
        props.filteredData === 'All')
    );
  });

  const filteredIncomes = props.incomeData.filter((income) => {
    return (
      (income.type === props.filteredData &&
        income.date.getFullYear().toString() === props.filteredYear &&
        income.date.toLocaleString('default', { month: 'long' }) ===
          props.filteredMonth) ||
      (props.filteredYear === 'All' &&
        props.filteredMonth === 'All' &&
        props.filteredData === 'All')
    );
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

  let incomes = filteredIncomes.map((el) => {
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
      <DataFilter />
      {props.filteredData === 'expense' && (
        <ExpensesChart expenses={props.expenseData} />
      )}
      {props.filteredData === 'income' && (
        <ExpensesChart expenses={props.incomeData} />
      )}
      {expenses}
      {incomes}
      {noData}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenseData: state.data.expenseData,
    incomeData: state.data.incomeData,
    filteredYear: state.filters.year,
    filteredMonth: state.filters.month,
    filteredData: state.filters.dataType,
  };
};

export default connect(mapStateToProps)(Data);
