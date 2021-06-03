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

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currUser={currUser} />
        <Routes currUser={currUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
