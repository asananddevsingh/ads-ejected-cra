import logo from './welcome.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is ejected create-react-app.</h1>
        <a
          className="App-link"
          href="https://github.com/asananddevsingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          AD's Github
        </a>
      </header>
    </div>
  );
}

export default App;
