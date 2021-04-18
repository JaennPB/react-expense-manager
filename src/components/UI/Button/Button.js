import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.isSideButton && styles.sideButton} ${
        props.add && styles.add
      } ${props.del && styles.del} ${props.grey && styles.grey} ${
        props.color && styles.color
      } ${props.filterButton && styles.filterButton}`}
      onClick={props.clicked}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;
