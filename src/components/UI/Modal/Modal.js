import ReactDOM from 'react-dom';

import Button from '../Button/Button';

import styles from './Modal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.clicked}>
      <div className={styles.modal}>
        <h2>Please add valid info</h2>
        <p>{props.errorMessage}</p>
        <Button clicked={props.clicked} add>
          Try Again
        </Button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ErrorModal
      onClick={props.clicked}
      errorMessage={props.errorMessage}
      clicked={props.clicked}
    />,
    document.getElementById('error-modal')
  );
};

export default Modal;
