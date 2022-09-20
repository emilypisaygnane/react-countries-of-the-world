import Main from '../src/components/Main/Main';
import './App.css';
import background from './world-map.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Main />
    </div>
  );
}

export default App;
