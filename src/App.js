import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
