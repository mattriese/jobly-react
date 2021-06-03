import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';

/** NavBar component
 *
 * App -> NavBar
 */
function NavBar() {
	const currUser = useContext(CurrUserContext);
  return (
    <Navbar>
      <Nav.Link href="/">Jobly</Nav.Link>
      {!currUser && (
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      )}
      {currUser && (
        <Nav>
          <Nav.Link href="/companies">Companies</Nav.Link>
          <Nav.Link href="/jobs">Jobs</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/">Logout {currUser.user.username}</Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
