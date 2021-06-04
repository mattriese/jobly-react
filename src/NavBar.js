import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from "react-bootstrap/NavItem"
import {NavLink} from "react-router-dom";
import { useContext } from 'react';
import CurrUserContext from './currUserContext';
import { Button } from 'bootstrap';

/** NavBar component
 *
 * App -> NavBar
 */
function NavBar({handleLogout}) {
	const currUser = useContext(CurrUserContext);

	function logout(evt) {
		evt.preventDefault();
		handleLogout();
	}
	
  return (
    <Navbar>
			<NavItem>
      <NavLink className="nav-link" to="/">Jobly</NavLink></NavItem>
      {!currUser && (
        <Nav>
          <NavLink className="nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </Nav>
      )}
      {currUser && (
        <Nav>
          <NavLink className="nav-link" to="/companies">Companies</NavLink>
          <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink onClick={logout} className="nav-link" to="/">Logout {currUser.user.username}</NavLink>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
