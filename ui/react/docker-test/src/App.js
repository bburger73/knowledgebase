import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const presser = () => {
    const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email:"asdf@asdf.asdf", //inEmail,
              pass:"Asdf123$", //inPass
              name:"test"
            }),
          };
      
        fetch("http://localhost/user_account/create.php",requestOptions).then(res => {
            alert(res);
        });
  }
  const pressertwo = () => {
    const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email:"asdf@asdf.asdf", //inEmail,
              pass:"Asdf123$" //inPass
            }),
          };
      
        fetch("http://localhost/user_account/read.php",requestOptions).then(res => {
            alert(res);
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => presser()}>Click Me</button>
        <button onClick={() => pressertwo()}>Click Me</button>
      </header>
      <>
        <Link to="/">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgot">Forgot</Link>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/dashboard" element={<DashboardUser/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>    
      </>
    </div>
  );
}

export default App;
