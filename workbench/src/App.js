import logo from './logo.svg';
import './App.css';
import TOOLS_IMAGES from './images.js';
import Header from './JScomponents/header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={TOOLS_IMAGES.flimsyAxe} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
