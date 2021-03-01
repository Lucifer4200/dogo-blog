import './index.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <header className="content">
        <Home />
      </header>
    </div>
  );
}

export default App;
