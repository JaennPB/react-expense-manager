import { connect } from 'react-redux';

import FilterOptions from './FilterOptions/FilterOptions';
import Button from '../../../components/UI/Button/Button';

import * as actions from '../../../store/actions/indexActions';

import styles from './DataFilter.module.css';

const DataFilter = (props) => {
  let content = (
    <div className={styles.filterButton}>
      <Button clicked={props.showFilters} filterButton>
        Filter
      </Button>
    </div>
  );

  if (props.filtersVisible) {
    content = (
      <>
        <div className={styles.xButton}>
          <Button filterButton clicked={props.showFilters}>
            Remove filters
          </Button>
        </div>
        <FilterOptions />
      </>
    );
  }
  return <div className={styles.dataFilters}>{content}</div>;
};

const mapStateToProps = (state) => {
  return {
    filtersVisible: state.filters.showFilters,
  };
};

export default connect(mapStateToProps, actions)(DataFilter);
