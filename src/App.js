import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/dogs">Home</NavLink>
        </header>
        <Switch>
          <Route path="/dogs" exact>
            <Dogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
