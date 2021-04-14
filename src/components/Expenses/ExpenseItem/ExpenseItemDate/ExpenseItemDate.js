import styles from './ExpenseItemDate.module.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={styles.expenseDate}>
      <div className={styles.month}>{month}</div>
      <div className={styles.day}>{day}</div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
