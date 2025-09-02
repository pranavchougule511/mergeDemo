import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Today is Tuesday <br/>
          And today is a wonderful day!
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GIT with me...
        </a>
      </header>

      <div className='main-container'>
        <h2>This is main title</h2>
        <h2>This is sub title</h2>
      </div>
    </div>
  );
}

export default App;
