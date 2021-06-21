import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';
import "./Homepage.css";

/** Homepage component
 *
 * Routes -> Homepage
 */

function Homepage() {
  const currUser = useContext(CurrUserContext);
  console.log('currUser in homepage= ', currUser);
  return (
    <container className="Homepage-container">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currUser && <h2>Welcome Back, {currUser.user.firstName}</h2>}
      {!currUser && (
        <div>
          <Button className="Homepage-button" href="/login">Log in</Button>
          <Button className="Homepage-button" href="/signup">Sign up</Button>
        </div>
      )}
    </container>
  );
}

export default Homepage;
