import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ApiPicker from './api-picker';

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
      
        fetch(global.server + "user_account/create",requestOptions).then(res => {
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
      
        fetch(global.server + "user_account/read",requestOptions).then(res => {
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
        <ApiPicker></ApiPicker>
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
