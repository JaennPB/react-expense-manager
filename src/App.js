import { useState } from 'react';
import ExInData from './containers/ExInData/ExInData';
import NewExIn from './components/NewExIn/NewExIn';

function App() {
  const [expenses, setNewExpense] = useState([]);

  const newExpenseHandler = (expense) => {
    setNewExpense((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <>
      <h2 className="title">Expense Manager</h2>
      <NewExIn onNewExpense={newExpenseHandler} />
      <ExInData expenses={expenses} />
    </>
  );
}

export default App;
