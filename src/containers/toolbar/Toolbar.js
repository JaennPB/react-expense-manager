import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import AuthFrom from './Auth/AuthForm/AuthForm';
import * as actions from '../../store/actions/indexActions';

import styles from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <>
      {props.startAuth && (
        <Modal>
          <AuthFrom />
        </Modal>
      )}
      <div className={styles.toolbarContainer}>
        <div className={styles.logo}>Expense Manager</div>
        <div>
          <Button isSideButton grey clicked={props.authStart}>
            Login
          </Button>
          <Button grey>Singup</Button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    startAuth: state.auth.authStart,
  };
};

export default connect(mapStateToProps, actions)(Toolbar);
