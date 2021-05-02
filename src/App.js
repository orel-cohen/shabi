import NavigationHeader from './Navigation/NavigationHeader';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';

import LoginPage from './Pages/LoginPage';
import AboutPage from './Pages/AboutPage';
import ShopPage from './Pages/ShopPage';
import DashboardPage from './Pages/DashboardPage'
import SendConstraintsPage from './Pages/SendConstraintsPage';

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Layout className="layout">
          <NavigationHeader />
          <div className="content">
          <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />

            {/* <Route path="/justiceboard" component={JusticeBoardPage}/> */}

            {/* Maybe by popup or hover window */}
            <Route path="/send-constraints" component={SendConstraintsPage} />


            {/* <Route path="SwapRequest" component={LoginPage}/> */}

            <Route path="/shop" component={ShopPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/about" component={AboutPage} />
          </div>
            
          <Footer className="footer">Shabi ©2021 Develop by Orel Cohen</Footer>
        </Layout>
      {/* </div> */}

    </Router>
  );
}

export default App;
