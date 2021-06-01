import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";


function Routes(){



	return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage  />
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
				<Route exact path="/login">
          <LoginForm />
        </Route>
				<Route exact path="/signup">
          <SignupForm />
        </Route>
				<Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
