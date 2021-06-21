import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';
import './Homepage.css';

/** Homepage component
 *
 * Routes -> Homepage
 */

function Homepage() {
  const currUser = useContext(CurrUserContext);
  console.log('currUser in homepage= ', currUser);
  return (
    <div className="Homepage-container">
      <h1>Jobly</h1>
      <h5>All the jobs in one, convenient place.</h5>
      {currUser && <h2>Welcome, {currUser.user.firstName}</h2>}
      {!currUser && (
        <div>
          <Button className="Homepage-button" variant="dark" href="/login">
            Log in
          </Button>
          <Button className="Homepage-button" variant="dark" href="/signup">
            Sign up
          </Button>
        </div>
      )}
    </div>
  );
}

export default Homepage;
