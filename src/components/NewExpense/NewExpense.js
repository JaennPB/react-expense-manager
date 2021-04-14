import { useState } from 'react';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import Button from '../UI/Button/Button';

import styles from './NewExpense.module.css';

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
    <div className={styles.newExpense}>
      {showForm || (
        <>
          <Button clicked={() => {}} isSideButton add>
            Add new income
          </Button>

          <Button clicked={toggleExpenseFormHandler} del>
            Add new expense
          </Button>
        </>
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
