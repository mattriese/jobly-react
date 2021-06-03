import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar"
import Routes from "./Routes"

/** App component
 *
 * State:
 * - currUser
 *
 * App -> NavBar
 *     -> Routes
 */
function App() {

  const [currUser, setCurrUser] = useState(null)

  function handleLogin() {
    return <h1>handled</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currUser={currUser} />
        <Routes currUser={currUser} handleLogin={handleLogin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
