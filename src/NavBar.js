import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';

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
    <Navbar>
      <NavItem>
        <NavLink className="nav-link" to="/">
          Jobly
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
        <Nav>
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
          <NavItem>
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={logout} className="nav-link" to="/">
              Logout {currUser.user.username}
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
