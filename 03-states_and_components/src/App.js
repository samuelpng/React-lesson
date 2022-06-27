import logo from './logo.svg';
import './App.css';

export default class NumberBox extends React.Component{
  
  state = {
    count: 10
  }

  render() {
    return(
      <div style={{
        border: "1px solid black",
        padding: "10px",
        width: "20px"
      }}>{{this.state.count}}</div>
    )
  }
}

function App() {
  return (
    <div className="App">
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
