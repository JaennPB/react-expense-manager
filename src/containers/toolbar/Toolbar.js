import Button from '../../components/UI/Button/Button';

import styles from './Toolbar.module.css';

const Toolbar = (props) => {
  return (
    <div className={styles.toolbarContainer}>
      <div className={styles.logo}>Expense Manager</div>
      <div>
        <Button isSideButton grey>
          Login
        </Button>
        <Button grey>Singup</Button>
      </div>
    </div>
  );
};

export default Toolbar;
