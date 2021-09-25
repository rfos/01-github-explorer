import { RepositoryCounter } from './components/RepositoryCounter';
import { ReposityList } from './components/RepositoryList';
import './styles/global.scss';

function App() {
  return (
    <div className="wrapper">
      <ReposityList />
      <RepositoryCounter />
    </div>
  );
}

export default App;
