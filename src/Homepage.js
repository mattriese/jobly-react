import Button from 'react-bootstrap/Button';
import {useContext} from "react";
import CurrUserContext from "./currUserContext";

/** Homepage component
 *
 * Props:
 * - currUser
 *
 * Routes -> Homepage
 */

//15 currUSer.name eventually
function Homepage() {
  const currUser = useContext(CurrUserContext);
  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currUser && <h2>Welcome Back, {currUser.user.firstName}</h2>}
      {!currUser && (
        <div>
          <Button href="/login">Log in</Button>
          <Button href="/signup">Sign up</Button>
        </div>
      )}
    </div>
  );
}

export default Homepage;
