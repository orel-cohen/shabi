import React from 'react';
import './App.css';
import { ConfigProvider } from "antd";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainScreenLayout from './layout/MainScreenLayout';
const AppRoute = ({conponent: Component, layout: Layout, ...rest}) => (
  <Router {...rest} render={props => (
    <Layout><Component {...props}></Component></Layout>
  )}></Router>
)

function App() {
  return (
    <Router>
      <AppRoute path="/" layout={MainScreenLayout} conponent={MainPage} />
    </Router>
    
  );
}

export default App;
