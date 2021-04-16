import './App.css';
import { ConfigProvider } from "antd";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ConfigProvider direction="rtl">
    <MainPage/>
  </ConfigProvider>
    
  );
}

export default App;
