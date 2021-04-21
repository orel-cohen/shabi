import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/login" component={LoginPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/about" component={AboutPage} />
        

        <Route path="DashBoardPage" component={LoginPage}/>
        <Route path="JusticeBoardPage" component={LoginPage}/>

        {/* Maybe by popup or hover window */}
        <Route path="SendConstraintsPage" component={LoginPage}/>
        <Route path="SwapRequest" component={LoginPage}/>
      </div>

    </Router>
  );
}

export default App;
