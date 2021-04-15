import ExpenseDate from './ExInItemDate/ExInItemDate';

import styles from './ExInItem.module.css';

const ExInItem = (props) => {
  return (
    <div className={styles.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={styles.description}>
        <h2>{props.title}</h2>
        <div className={styles.price}>- ${props.amount}</div>
      </div>
    </div>
  );
};

export default ExInItem;
