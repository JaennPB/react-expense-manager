import { useState } from 'react';
import { connect } from 'react-redux';

import DataForm from './DataForm/DataForm';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/indexActions';

import styles from './NewData.module.css';

const NewData = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleShowFormState = () => {
    setShowForm((prevState) => {
      setShowForm(!prevState);
    });
  };

  const submitOrCancelHandler = () => {
    toggleShowFormState();
    props.submitOrCancel();
  };

  const addingIncome = () => {
    toggleShowFormState();
    props.addingIncome();
  };

  const addingExpense = () => {
    toggleShowFormState();
    props.addingExpense();
  };

  return (
    <div className={styles.newExpense}>
      {showForm || (
        <>
          <Button clicked={addingIncome} isSideButton add>
            Add new income
          </Button>

          <Button clicked={addingExpense} del>
            Add new expense
          </Button>
        </>
      )}
      {showForm && (
        <DataForm
          onFormSubmit={submitOrCancelHandler}
          onCancel={submitOrCancelHandler}
        />
      )}
    </div>
  );
};

export default connect(null, actions)(NewData);
