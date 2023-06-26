import Candidates from './components/Candidates';
import Config from './components/Config';
import TotalVotes from './components/TotalVotes';
import Results from './components/Results';

import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>Sistema de votaciones</h1>
      <div className="vote-container">
        <Candidates />
      </div>
      <div className="info-container">
        <div className="filter">
          <Config />
        </div>
        <div className="total-votes">
          <TotalVotes />
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
