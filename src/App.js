import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Todo App </h1>
      <div className="container">
        <div className="input-box">
          <input type="text"/> <button> Add Task </button>
        </div>
        <div className="list">
          <ul>
            <li>Dummy </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
