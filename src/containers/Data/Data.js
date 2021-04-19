import { connect } from 'react-redux';

import DataItem from '../../components/DataItem/DataItem';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import DataFilter from './DataFilter/DataFilter';

import styles from './Data.module.css';

const Data = (props) => {
  const filteredExpenses = props.expenseData.filter((expense) => {
    return (
      expense.type === props.filteredData &&
      expense.date.getFullYear().toString() === props.filteredYear &&
      expense.date.toLocaleString('default', { month: 'long' }) ===
        props.filteredMonth
    );
  });

  const filteredIncomes = props.incomeData.filter((income) => {
    return (
      income.type === props.filteredData &&
      income.date.getFullYear().toString() === props.filteredYear &&
      income.date.toLocaleString('default', { month: 'long' }) ===
        props.filteredMonth
    );
  });

  let expensesFiltered = filteredExpenses.map((el) => {
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

  let incomesFiltered = filteredIncomes.map((el) => {
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

  const expesesNotFiltered = props.expenseData.map((el) => {
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

  const incomesNotFiltered = props.incomeData.map((el) => {
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
  if (
    (expensesFiltered.length || expesesNotFiltered.length) === 0 &&
    (incomesFiltered.length || incomesNotFiltered.length) === 0
  ) {
    noData = (
      <p className={styles.fallback}>
        No items... please start adding some data
      </p>
    );
  }

  // FIXME: fix chart so that it can also show both expenes and income
  // let filtersNotShown;
  // if (!props.showFilteredData) {
  //   filtersNotShown = <ExpensesChart expenses={props.expenseData} />;
  // }

  let chartFiltersShown;
  if (props.showFilteredData && props.filteredData === 'expense') {
    chartFiltersShown = <ExpensesChart expenses={props.expenseData} />;
  } else if (props.showFilteredData && props.filteredData === 'income') {
    chartFiltersShown = <ExpensesChart expenses={props.incomeData} />;
  }

  return (
    <div className={styles.expenses}>
      {/* {filtersNotShown} */}
      {noData}
      {!noData && <DataFilter />}
      {!props.showFilteredData && [expesesNotFiltered, incomesNotFiltered]}
      {chartFiltersShown}
      {props.showFilteredData && [expensesFiltered, incomesFiltered]}
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
    showFilteredData: state.filters.showFilters,
  };
};

export default connect(mapStateToProps)(Data);
