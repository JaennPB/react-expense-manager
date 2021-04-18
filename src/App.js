import Data from './containers/Data/Data';
import NewData from './components/NewData/NewData';
import Toolbar from './containers/toolbar/Toolbar';

function App() {
  return (
    <>
      <Toolbar />
      <NewData />
      <Data />
    </>
  );
}

export default App;
