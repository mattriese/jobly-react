import React, { useContext } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
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
 * App -> Routes -> Homepage
 *               -> CompanyList
 *               -> CompanyDetail
 *               -> JobList
 *               -> LoginForm
 *               -> SignupForm
 *               -> ProfileForm
 */
function Routes({ handleLogin, handleSignup }) {
  const currUser = useContext(CurrUserContext);
  // console.log("currUserUsername in Routes--->", currUserUsername);
  // if (!currUser) {
  //   return (
  //     <Redirect to="/"/>
  //   )
  // }
  console.log('currUSer in routes: ', currUser);

  if (currUser) {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <LoginForm handleLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupForm handleSignup={handleSignup}/>
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
  } else {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <LoginForm handleLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
