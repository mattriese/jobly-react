import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';
import './NavBar.css';

/** NavBar component
 *
 * Props: handleLogout (function)
 *
 * App -> NavBar
 */
function NavBar({ handleLogout }) {
  const currUser = useContext(CurrUserContext);

  function logout(evt) {
    evt.preventDefault();
    handleLogout();
  }

  return (
    <Navbar className="NavBar" sticky="top" bg="dark" variant="dark">
      <NavItem>
        <NavLink className="nav-link" to="/">
          <b>Jobly</b>
        </NavLink>
      </NavItem>
      {!currUser && (
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      )}
      {currUser && (
        <Nav className="Nav">
          <NavItem>
            <NavLink className="nav-link" to="/companies">
              Companies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/jobs">
              Jobs
            </NavLink>
          </NavItem>
          <NavItem className="ml-auto">
            <NavLink onClick={logout} className="nav-link ml-auto" to="/">
              Logout {currUser.user.username}
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
