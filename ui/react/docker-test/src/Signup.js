import React from 'react';
import './global.js';
//import ReactLoading from 'react-loading';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false
        }
    }

    componentDidMount = () => {
        
    }

    signUp = () => {
        var email = document.getElementById('email').value;
        var emailVer = document.getElementById('emailVer').value;
        var pass = document.getElementById('pass').value;
        var passVer = document.getElementById('passVer').value;
        var name = document.getElementById('name').value;
        this.props.setLoading(true);
        if( email === '' || 
            emailVer === '' ||
            pass === '' || 
            passVer === '' ||
            name === '')
            {
                this.props.setLoading(false);
                alert("You Left Something Out...")
            }else{
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        pass: pass,
                        name: name
                    }),
                };

                fetch(global.server + "user_account/create.php", requestOptions).then(res =>res.json()).then((result) =>{
                    alert(result.response);
                    this.props.setLoading(false);
                });
            }
        }

    compareEmails = () => {
        var email = document.getElementById('email').value;
        var emailVer = document.getElementById('emailVer').value;
        if(email !== emailVer)
        {
            document.getElementById('emailVerLabel').style.display = "block";
        }else{
            document.getElementById('emailVerLabel').style.display = "none";
        }
    }

    comparePasswords = () => {
        var pass = document.getElementById('pass').value;
        var passVer = document.getElementById('passVer').value;
        if(pass !== passVer)
        {
            document.getElementById('passVerLabel').style.display = "block";
        }else{
            document.getElementById('passVerLabel').style.display = "none";
        }
    }

    render() {
        const multiplesInDiv = (
            <div className='signinForm'>
                <h1>Sign Up</h1>
                <label id='emailVerLabel' htmlFor='email' style={{color:"red",display:'none'}}>Emails Do Not Match</label>
                <input id='email' placeholder='Email' onKeyUp={this.compareEmails}/>
                <input id='emailVer' placeholder='Email Verification' onKeyUp={this.compareEmails}/>
                <label id='passVerLabel' htmlFor='pass' style={{color:"red",display:'none'}}>Passwords Do Not Match</label>
                <input type='password' id='pass' placeholder='Password' onKeyUp={this.comparePasswords} />
                <input type='password' id='passVer' placeholder='Password Verification' onKeyUp={this.comparePasswords} />
                <input id='name' placeholder='Your Name' />
                <button onClick={this.signUp}>Sign Up</button>
            </div>
        );

        return multiplesInDiv;
    }
}

class SelectComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <select id={this.props.id} onChange={this.props.passedOnChange} defaultValue={this.props.defaultValue}>
                <option defaultValue>Please Select A {this.props.idNameSelect}</option>
                {this.props.options.map(opt => (
                    <option id={opt.id} key={opt.id + opt.name} >{typeof opt.name !== 'undefined'?opt.name:opt.school}</option>
                ))}
            </select>
        )
    }
}

export default Signup;