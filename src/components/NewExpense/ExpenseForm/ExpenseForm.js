import { useState } from 'react';

import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
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

    props.onFormSubmit(inputData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const closeModalHandler = () => {
    setError((prevState) => {
      return {
        ...error,
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
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={changeTitleHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={changeAmountHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
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
        <div className="new-expense__actions">
          <Button clicked={props.onCancel} isSideButton>
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
