import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const formSubmitHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};

export default NewExpense;
