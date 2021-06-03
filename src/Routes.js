import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

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
function Routes({currUser, handleLogin}) {

  return (
    <Switch>
      <Route exact path="/">
        <Homepage currUser={currUser}/>
      </Route>
      <Route exact path="/companies">
        <CompanyList currUser={currUser}/>
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetail currUser={currUser}/>
      </Route>
      <Route exact path="/jobs">
        <JobList currUser={currUser}/>
      </Route>
      <Route exact path="/login">
        <LoginForm handleLogin={handleLogin}/>
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <Route exact path="/profile">
        <ProfileForm currUser={currUser}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
