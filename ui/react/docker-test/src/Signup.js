import React from 'react';
import './global.js';
import{Navigate} from "react-router-dom";
//import ReactLoading from 'react-loading';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "",
            emailVer: "",
            pass: "",
            passVer: "",
            name: "",
            showEmailLabel: false,
            showPassLabel: false,
            redirect:false,
        }
    }

    componentDidMount = () => {

    }

    signUp = () => {
        this.props.setLoading(true);
        if (this.state.email === "" ||
            this.state.emailVer === "" ||
            this.state.pass === "" ||
            this.state.passVer === "" ||
            this.state.name === "") {
                this.props.setLoading(false);
                alert("You Left Something Out...")
        } else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.email,
                    pass: this.state.pass,
                    name: this.state.name
                }),
            };

            fetch(global.server + "user_account/create", requestOptions).then(res => res.json()).then((result) => {
                if (result.result) {
                    this.props.setRedirectToSignin();
                }else{
                    alert(result.message);
                }
            }).finally(() => {
                this.props.setLoading(false);
            });
        }
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value,
            showEmailLabel: e.target.value !== this.state.emailVer
        })
    }

    setVerEmail = (e) => {
        this.setState({
            emailVer: e.target.value,
            showEmailLabel: this.state.email !== e.target.value
        })
    }


    setPassword = (e) => {
        this.setState({
            pass: e.target.value,
            showPassLabel: e.target.value !== this.state.passVer
        })
    }

    setVerPassword = (e) => {
        this.setState({
            passVer: e.target.value,
            showPassLabel: e.target.value !== this.state.pass
        })
    }
    
    setName = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    render() {
        const multiplesInDiv = this.props.redirectToSignin?<Navigate to="/signin" replace />:
        (
            <div className='signinForm'>
                <h1>Sign Up</h1>
                <label id='emailVerLabel' htmlFor='email' style={this.state.showEmailLabel ? { color: "red",display: 'block'} : { color: "red", display: 'none' }}>Emails Do Not Match</label>
                <input id='email' placeholder='Email' defaultValue={this.state.email} onKeyUp={this.setEmail} />
                <input id='emailVer' placeholder='Email Verification' defaultValue={this.state.emailVer} onKeyUp={this.setVerEmail} />
                <label id='passVerLabel' htmlFor='pass' style={this.state.showPassLabel ? { color: "red", display: 'block' }:{ color: "red", display: 'none' }}>Passwords Do Not Match</label>
                <input type='password' id='pass' placeholder='Password' defaultValue={this.state.pass} onKeyUp={this.setPassword} />
                <input type='password' id='passVer' placeholder='Password Verification' defaultValue={this.state.passVer} onKeyUp={this.setVerPassword} />
                <input id='name' placeholder='Your Name' onKeyUp={this.setName} />
                <button onClick={this.signUp}>Sign Up</button>
            </div>
        );

        return multiplesInDiv;
    }
}


export default Signup;