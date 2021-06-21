import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { JoblyApi } from './api';
import jwt_decode from 'jwt-decode';
import CurrUserContext from './currUserContext';

/** App component
 *
 * State:
 * - currUser (user object)
 * - token (string)
 * - isLoaded (boolean)
 *
 * App -> NavBar
 *     -> Routes
 */
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isLoaded, setIsLoaded] = useState(false);

  async function handleLogin(loginData) {
    try {
      const token = await JoblyApi.login(loginData);
      setToken(token);
      localStorage.setItem('token', token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handlelogin err = ', err);
      return err;
    }
  }

  function handleLogout() {
    setToken('');
    setCurrUser(null);
    localStorage.removeItem('token');
  }

  async function handleSignup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handleSignup err = ', err);
      return err;
    }
  }

  useEffect(
    function getCurrUser() {
      async function getUserFromApi() {
        try {
          if (token) {
            const { username } = jwt_decode(token);
            JoblyApi.token = token;
            console.log('localstorage token= ', localStorage.getItem('token'));
            const user = await JoblyApi.getUser(username);
            setCurrUser(user);
          }
          setIsLoaded(true);
        } catch (err) {
          console.log('getCurrUser err = ', err);
        }
      }
      getUserFromApi();
    },
    [token]
  );

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <CurrUserContext.Provider value={currUser}>
          <NavBar handleLogout={handleLogout} />
          <Routes handleLogin={handleLogin} handleSignup={handleSignup} />
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
