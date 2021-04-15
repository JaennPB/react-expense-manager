import Data from './containers/Data/Data';
import NewData from './components/NewData/NewData';

function App() {
  return (
    <>
      <h2 className="title">Expense Manager</h2>
      <NewData />
      <Data />
    </>
  );
}

export default App;
