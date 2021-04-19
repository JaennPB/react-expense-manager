import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import dataReducer from './store/reducers/dataReducer';
import filtersReducer from './store/reducers/filtersReducer';
import authReducer from './store/reducers/authReducer';

import './index.css';

const rootReducer = combineReducers({
  data: dataReducer,
  filters: filtersReducer,
  auth: authReducer,
});

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
