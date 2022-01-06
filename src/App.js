import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import Header from './components/Header/Header';
import Admin from './views/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Dogs />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/dogs/:id" exact>
            <Dog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
