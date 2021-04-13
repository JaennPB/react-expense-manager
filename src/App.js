import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setNewExpense] = useState([]);

  const newExpenseHandler = (expense) => {
    setNewExpense((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div>
      <h2>Expense Manager</h2>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
