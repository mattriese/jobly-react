import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"; 

/** NavBar component
 * 
 * Props:
 * - currUser
 * 
 * App -> NavBar
 */
function NavBar({currUser}) {
	return (
		// <nav>

		// 	<NavLink exact to="/">Jobly</NavLink>
		// 	{!currUser && <div>
		// 		<NavLink exact to="/login">Login</NavLink>
		// 		<NavLink exact to="/signup">Sign up</NavLink>
		// 	</div>}
		// 	{currUser && <div>
		// 		<NavLink exact to="/companies">Companies</NavLink>
		// 		<NavLink exact to="/jobs">Jobs</NavLink>
		// 		<NavLink exact to="/profile">Profile</NavLink>
		// 		<NavLink exact to="/">Logout {currUser.name}</NavLink>
		// 	</div>}
		// </nav>
		<Navbar>
			<Nav.Link href="/">Jobly</Nav.Link>
			{!currUser && 
				<Nav>
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="/signup">Signup</Nav.Link>
				</Nav>
			}
			{currUser && 
				<Nav>
					<Nav.Link href="/companies">Companies</Nav.Link>
					<Nav.Link href="/jobs">Jobs</Nav.Link>
					<Nav.Link href="/profile">Profile</Nav.Link>
					<Nav.Link href="/">Logout {currUser.name}</Nav.Link>
				</Nav>
			}
		</Navbar>
	)
}

export default NavBar;
