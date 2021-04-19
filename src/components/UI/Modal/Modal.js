import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <Backdrop>
      <div className={styles.modalContainer}>{props.children}</div>
    </Backdrop>
  );
};

const ModalPortal = (props) => {
  return ReactDOM.createPortal(
    <Modal {...props} />,
    document.getElementById('modal')
  );
};

export default ModalPortal;
