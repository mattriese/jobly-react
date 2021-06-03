import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { JoblyApi } from './api';
import jwt_decode from "jwt-decode";

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
    if (token) {
      let {username} = jwt_decode(token);
      console.log("username in useeffect/getcurruser= ", username)
      async function getUserFromApi(username) {
        console.log("username in useeffect/getuserfromapi= ", username)
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
        console.log("currUser after API call: ", currUser);
      }
      getUserFromApi();
    }
    // if token ->
  // jwt.decode(token) = {username}
  // asynch : et user objoect from backend (write fcn on joblapiy)
  // set Jobliapi.token with current toekn state
  // setcurrUser
  },
    [token]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currUser={currUser} />
        <Routes currUser={currUser} handleLogin={handleLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
