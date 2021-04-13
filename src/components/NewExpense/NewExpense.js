import { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const formSubmitHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);

    setShowForm((prevState) => {
      setShowForm(!prevState);
    });
  };

  const toggleExpenseFormHandler = () => {
    setShowForm((prevState) => {
      setShowForm(!prevState);
    });
  };

  return (
    <div className="new-expense">
      {showForm || (
        <button onClick={toggleExpenseFormHandler}>Add new expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onFormSubmit={formSubmitHandler}
          onCancel={toggleExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
