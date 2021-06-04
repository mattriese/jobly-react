import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import CurrUserContext from './currUserContext';

/** Routes component
 *
 * Props: handleLoginOrSignup (function)
 *
 * App -> Routes -> Homepage
 *               -> CompanyList
 *               -> CompanyDetail
 *               -> JobList
 *               -> LoginForm
 *               -> SignupForm
 *               -> ProfileForm
 */
function Routes({ handleLoginOrSignup }) {
  const currUser = useContext(CurrUserContext);

  if (currUser) {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <Route path="/companies/:handle">
          <CompanyDetail />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <LoginForm handleLoginOrSignup={handleLoginOrSignup} />
      </Route>
      <Route exact path="/signup">
        <SignupForm handleLoginOrSignup={handleLoginOrSignup} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
