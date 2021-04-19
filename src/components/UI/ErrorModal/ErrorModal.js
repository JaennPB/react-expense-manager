import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Backdrop>
      <div className={styles.modal}>
        <h2>Please add valid info</h2>
        <p>{props.errorMessage}</p>
        <Button clicked={props.clicked} add>
          Try Again
        </Button>
      </div>
    </Backdrop>
  );
};

const ErrorModalPortal = (props) => {
  return ReactDOM.createPortal(
    <ErrorModal {...props} />,
    document.getElementById('error-modal')
  );
};

export default ErrorModalPortal;
