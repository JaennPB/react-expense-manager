import { useState } from "react";

import ExpenseDate from "./ExpenseItemDate/ExpenseItemDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setTitle("updated!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
