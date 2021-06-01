import { NavLink } from "react-router-dom";

/** NavBar component
 * 
 * Props:
 * - currUser
 * 
 * App -> NavBar
 */
function NavBar({currUser}) {
	return (
		<nav>

			<NavLink exact to="/">Jobly</NavLink>
			{!currUser && <div>
				<NavLink exact to="/login">Login</NavLink>
				<NavLink exact to="/signup">Sign up</NavLink>
			</div>}
			{currUser && <div>
				<NavLink exact to="/companies">Companies</NavLink>
				<NavLink exact to="/jobs">Jobs</NavLink>
				<NavLink exact to="/profile">Profile</NavLink>
				<NavLink exact to="/">Logout {currUser.name}</NavLink>
			</div>}
		</nav>
	)
}

export default NavBar;
