import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.isSideButton && styles.sideButton}`}
      onClick={props.clicked}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;
