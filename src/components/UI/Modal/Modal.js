import Button from '../Button/Button';

import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.clicked}>
      <div className={styles.modal}>
        <h2>Please add valid info</h2>
        <p>{props.errorMessage}</p>
        <Button clicked={props.clicked}>Try Again</Button>
      </div>
    </div>
  );
};

export default Modal;
