import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { JoblyApi } from './api';
import jwt_decode from 'jwt-decode';
import CurrUserContext from './currUserContext';
import Loading from './Loading';

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

  /** handleLogin takes loginData from LoginForm component
   * fetches token from api for valid user or throws error
   * Called in LoginForm component */
  async function handleLogin(loginData) {
    try {
      const token = await JoblyApi.login(loginData);
      setToken(token);
      localStorage.setItem('token', token);
      console.log('localstorage token= ', localStorage.getItem('token'));
      setIsLoaded(false);
    } catch (err) {
      console.log('handlelogin err = ', err);
      throw new Error(err);
    }
  }

  /** handleLogout removes currUser from state
   * and token from state and localStorage  */
  function handleLogout() {
    setToken('');
    setCurrUser(null);
    localStorage.removeItem('token');
  }

  /** handleSignup tries to fetch token from api by passing signupData to api
   * throws error if signup unsuccessful.
   * Called in SignupForm component
   */
  async function handleSignup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handleSignup err = ', err);
      throw new Error(err);
    }
  }


  /** When token state is set by handleLogin or handleSignup, this Effect gets
   * the username from the token and sets the currUser state to that username,
   * to be provided to the rest of the app with useContext */
  useEffect(
    function getCurrUser() {
      async function getUserFromApi() {
        try {
          if (token) {
            const { username } = jwt_decode(token);
            JoblyApi.token = token;
            const user = await JoblyApi.getUser(username);
            console.log("user from api response in app==========", user);
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
    return <Loading></Loading>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <CurrUserContext.Provider value={{ currUser, setCurrUser }}>
          <NavBar handleLogout={handleLogout} />
          <Routes handleLogin={handleLogin} handleSignup={handleSignup} />
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
