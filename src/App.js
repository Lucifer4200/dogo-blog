import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Component/Create'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Create'>
              <Create />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
