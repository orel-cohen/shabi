import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import DashboardPage from './Pages/DashboardPage'
import JusticeBoardPage from './Pages/JusticeBoardPage';
import SendConstraintsPage from './Pages/SendConstraintsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route path="/login" exact component={LoginPage} />        

        <Route path="/dashboard" component={DashboardPage}/>
        <Route path="/justiceboard" component={JusticeBoardPage}/>

        {/* Maybe by popup or hover window */}
        <Route path="send-constraints" component={SendConstraintsPage}/>
        <Route path="SwapRequest" component={LoginPage}/>
        
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/about" component={AboutPage} />
      </div>

    </Router>
  );
}

export default App;
