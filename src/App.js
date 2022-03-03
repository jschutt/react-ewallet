import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddCard from './pages/AddCard.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={(props) => <Home />}/>
          <Route path="/addcard" render={(props) => <AddCard />}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
