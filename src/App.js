import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { JoblyApi } from './api';
import jwt_decode from "jwt-decode";
import CurrUserContext from "./currUserContext";

/** App component
 *
 * State:
 * - currUser
 *
 * App -> NavBar
 *     -> Routes
 */
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState('');

  async function handleLogin(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
    } catch (err) {
      console.log('handlelogin err = ', err);
      return err;
    }
  }

  useEffect(function getCurrUser() {
    async function getUserFromApi(username) {
      // console.log("username in useeffect/getuserfromapi= ", username)
      if (token) {
        let {username} = jwt_decode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
      }
    }
    getUserFromApi();
    // if token ->
  // jwt.decode(token) = {username}
  // asynch : et user objoect from backend (write fcn on joblapiy)
  // set Jobliapi.token with current toekn state
  // setcurrUser
  },[token] );
  console.log("currUser in APP after render--->", currUser);

  return (
    <div className="App">
      <BrowserRouter>
        <CurrUserContext.Provider value={currUser}>
          <NavBar />
          <Routes handleLogin={handleLogin} />
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
