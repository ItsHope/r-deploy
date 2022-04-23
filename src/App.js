import "./App.css"
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1>React Website</h1>
      <section class ="header">
      <li></li>
      <li></li>
      <li></li>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

