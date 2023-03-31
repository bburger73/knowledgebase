import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
