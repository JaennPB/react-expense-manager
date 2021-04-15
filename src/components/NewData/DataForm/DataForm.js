import { useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import * as actions from '../../../store/actions/indexActions';

import styles from './DataForm.module.css';

const DataForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [error, setError] = useState({
    isValid: true,
    errorMessage: null,
  });

  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredTitle && !enteredTitle && !enteredAmount) {
      setError({
        isValid: false,
        errorMessage: '💥ERROR:💥 Please add a valid title, amount and date.',
      });
      return;
    }
    if (!enteredTitle) {
      setError({
        isValid: false,
        errorMessage: '💥ERROR:💥 Please add a valid title.',
      });
      return;
    }
    if (!enteredAmount) {
      setError({
        isValid: false,
        errorMessage: '💥ERROR:💥 Please add a valid amount.',
      });
      return;
    }
    if (!enteredDate) {
      setError({
        isValid: false,
        errorMessage: '💥ERROR:💥 Please add a valid date.',
      });
      return;
    }

    const inputData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.addExpense(inputData);
    // FIXME:
    // add redux state (submited, NOT submited) so that form automatically closes from redux
    // and so that this can be removed
    props.onFormSubmit();
    // FIXME:

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const closeModalHandler = () => {
    setError((prevState) => {
      return {
        ...prevState,
        isValid: true,
        errorMessage: '',
      };
    });
  };

  return (
    <>
      {!error.isValid && (
        <Modal errorMessage={error.errorMessage} clicked={closeModalHandler} />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles.newExpense}>
          <div className={styles.control}>
            <label>Title</label>
            <input
              type="text"
              onChange={changeTitleHandler}
              value={enteredTitle}
              placeholder="e.j. Food"
            />
          </div>
          <div className={styles.control}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={changeAmountHandler}
              value={enteredAmount}
              placeholder="e.j. 29.00"
            />
          </div>
          <div className={styles.control}>
            <label>Date</label>
            <input
              type="date"
              min="2021-01-01"
              max="2025-12-31"
              onChange={changeDateHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button clicked={props.onCancel} isSideButton del>
            Cancel
          </Button>
          <Button type="submit" add>
            Add expense
          </Button>
        </div>
      </form>
    </>
  );
};

export default connect(null, actions)(DataForm);
