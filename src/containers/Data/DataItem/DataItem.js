import DataItemDate from './DataItemDate/DataItemDate';

import styles from './DataItem.module.css';

const DataItem = (props) => {
  return (
    <div className={styles.expenseItem}>
      <DataItemDate date={props.date} />
      <div className={styles.description}>
        <h2>{props.title}</h2>
        <div
          className={`${styles.price} ${props.isExpense && styles.isExpense} ${
            props.isIncome && styles.isIncome
          }`}
        >
          {props.isExpense && '-'} {props.isIncome && null} ${props.amount}
        </div>
      </div>
    </div>
  );
};

export default DataItem;
