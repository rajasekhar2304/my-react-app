import logo from './logo.svg';
import './App.css';

function App() {
	return (
    <div className="App">
	<h1>Hello World! This is  Gurugubelli Rajasekhar</h1>
        <p>Suite America Demo project</p>
	<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DevRabbit offers you SmartQE to make Testing and Deployment easy.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
