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
  const [isLoaded, setIsLoaded] = useState(false);

  async function handleLogin(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handlelogin err = ', err);
      return err;
    }
  }

  async function handleLogout() {
    setToken("");
    setCurrUser(null);
  }

  async function handleSignup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handlelogin err = ', err);
      return err;
    }
  }

  useEffect(function getCurrUser() {
    async function getUserFromApi() {
      if (token) {
        let {username} = jwt_decode(token);
        JoblyApi.token = token;
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
      }
      setIsLoaded(true);
    }
    getUserFromApi();
  },[token] );

  if (!isLoaded) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <CurrUserContext.Provider value={currUser}>
          <NavBar handleLogout={handleLogout}/>
          <Routes handleLogin={handleLogin} handleSignup={handleSignup}/>
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
