import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/authReducer';
import expenseReducer from './store/reducers/expenseReducer';
import incomeReducer from './store/reducers/incomeReducer';

import './index.css';
import App from './App';

const rootReducer = combineReducers({
  expenses: expenseReducer,
  income: incomeReducer,
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
