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
  const [isLoading, setIsLoading] = useState(true);

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
    async function getUserFromApi() {
      // console.log("username in useeffect/getuserfromapi= ", username)
      if (token) {
        let {username} = jwt_decode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
      }
      setIsLoading(false);
    }
    getUserFromApi();
  },[token] );

  // if token ->
// jwt.decode(token) = {username}
// asynch : et user objoect from backend (write fcn on joblapiy)
// set Jobliapi.token with current toekn state
// setcurrUser

  console.log("currUser in APP after render--->", currUser);
  console.log("token after render:", JoblyApi.token)

  if (isLoading) {
    return <div>loading...</div>
  }

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
