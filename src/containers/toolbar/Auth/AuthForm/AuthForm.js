import Backdrop from '../../../../components/UI/Backdrop/Backdrop';
import Button from '../../../../components/UI/Button/Button';

import styles from './AuthForm.module.css';

const AuthForm = (props) => {
  return (
    // TODO: add form and functionality
    <>
      <Button add isSideButton>
        Login
      </Button>
      <Button del>Go back</Button>
    </>
  );
};

export default AuthForm;
