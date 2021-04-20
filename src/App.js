import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route/>
        <Route/>
      </div>

    </Router>
  );
}

export default App;
