
import { useContext } from 'react';
import CurrUserContext from './currUserContext';
import { Link } from "react-router-dom";
import './Homepage.css';

/** Homepage component
 *
 * Routes -> Homepage
 */
/**this works in Homepage-container style={{backgroundImage: "url(/ben-o-bro-wpU4veNGnHg-unsplash.jpg)",
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} */
function Homepage() {
  const { currUser } = useContext(CurrUserContext);
  console.log('currUser in homepage= ', currUser);
  return (
    <div className="Homepage-container" >
      <div className="Homepage-welcome">
        <h1 className="Homepage-title">Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        {currUser && <h2>Welcome, {currUser.user.firstName}</h2>}
        {!currUser && (
          <div>
            <Link className="Homepage-button btn btn-dark" to="/login">
              Log in
            </Link>
            <Link className="Homepage-button btn btn-dark" to="/signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
