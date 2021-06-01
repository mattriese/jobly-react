import { useState } from 'react';
import './App.css';
import NavBar from "./NavBar"
import Routes from "./Routes"

function App() {

  const [currUser, setCurrUser] = useState(null)





  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
