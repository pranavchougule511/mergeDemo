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
        <p>
          The sky is beautiful today....<br/>
          Can't wait to see the moon tonight.      
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
    </div>
  );
}

export default App;
