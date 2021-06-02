import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

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
			{ !currUser && 
				<div>
				  <Button href="/login" >Log in</Button>
					<Button href="/signup">Sign up</Button>				
				</div>
			}
		</div>
	)
}

export default Homepage;
