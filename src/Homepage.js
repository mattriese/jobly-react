import {Link} from "react-router-dom";

/** Homepage component
 * 
 * Props:
 * - currUser
 * 
 * Routes -> Homepage
 */
function Homepage({currUser}) {

	return (
		<div>
			<h1>Jobly</h1>
			<p>All the jobs in one, convenient place.</p>
			{ currUser && <h2>Welcome Back, {currUser}</h2>}
			{ !currUser && <div>
				<Link to="/login">Log in</Link>
				<Link to="/signup">Sign up</Link>
				</div>
			}
		</div>
	)
}

export default Homepage;
