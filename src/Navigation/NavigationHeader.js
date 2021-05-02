import '../App.css';
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function NavigationHeader() { 
  return (
//     <Header className="haeder">

//       {/** Shabi logo */}
//       {/* <div className="logo" /> */}

// {/*  defaultSelectedKeys={['2']} */}
//       <Menu theme="light" mode="horizontal">
      
//         <Menu.Item key="1">nav 1</Menu.Item>
//         {/* <Link to='/login'> */}
//         <Menu.Item key="2">nav 2</Menu.Item>
//         {/* </Link> */}
//         <Menu.Item key="3">nav 3</Menu.Item>
//       </Menu>
//     </Header>


    <nav className="header" >
      {/* <img src={require('./shabi.png')} /> */}
      <h3>SHABI</h3>
      <ul className="nav-links">
        <Link to='/login'>
          <li>
          JOGIN
            </li>
        </Link>
        <Link to='/dashboard'>
        <li>
          BACK2DASH
            </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
