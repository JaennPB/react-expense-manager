import { useState } from 'react';

import DataForm from './DataForm/DataForm';
import Button from '../UI/Button/Button';

import styles from './NewData.module.css';

const NewData = () => {
  const [showForm, setShowForm] = useState(false);

  const formSubmitHandler = () => {
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
        // FIXME: check if this is necessary or if it can be fixed with redux
        <DataForm
          onFormSubmit={formSubmitHandler}
          onCancel={toggleExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewData;
