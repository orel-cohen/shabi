import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav" >
      <h3>LOGO</h3>
      <ul className="nav-links">
        <Link to='/login'>
          <li>
          Login
            </li>
        </Link>
        <li>
          About
            </li>
      </ul>
    </nav>
  );
}

export default Nav;
