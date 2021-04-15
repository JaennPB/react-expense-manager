import { useState } from 'react';

import ExInForm from './ExInForm/ExInForm';
import Button from '../UI/Button/Button';

import styles from './NewExIn.module.css';

const NewExIn = (props) => {
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
        <ExInForm
          onFormSubmit={formSubmitHandler}
          onCancel={toggleExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExIn;
