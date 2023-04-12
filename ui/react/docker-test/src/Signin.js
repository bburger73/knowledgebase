import React from 'react';
import {
    Link,
    Navigate
} from "react-router-dom";
import './global.js';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getsome: this.props.passedMethod,
            redirectAdmin: false,
            redirectTeacher: false,
            redirectUser: false,
            redirectForgot: false,
            redirectQuiz: false,
            redirectDisclaimer: false,
        }
        this.props.signout();
    }


    signIn = () => {
        this.props.setLoading(true);
        var username = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email:username,
                pass:pass
            }),
        };

        fetch(global.server + "user_account/read.php",requestOptions).then(res => res.json()).then(hold => {
            this.props.setLoading(false);
            let auth = hold['auth'];//0
            let user = hold['id'];//1
            let response = hold['response'];//2
            let prize = hold['prize'];//3
            let points = hold['points'];//4
            let school = hold['school'];//5
            let grade = hold['grade'];//6
            let name = hold['name'];//7
            let email = username;//8
            let phone = hold['phone'];//9
            let token = hold['token'];//9
            let quiz = hold['quiz'];//10
            let disclaimer = hold['disclaimer'];
            if (response === 'success' && auth === 0 && name !== null) {
                this.props.setLoading(false);
                this.props.signin(0, auth, user, prize, points, school, grade, name, email, phone, quiz,token);
                
                if(disclaimer === 0){
                    this.setState({ redirectDisclaimer: true});
                }else if (quiz > 0) {
                    this.setState({ redirectQuiz: true });//quiz
                }
                this.setState({
                    redirectUser: true,
                })
            } else if (response === 'success' && auth === 52 && name !== null) {
                this.props.setLoading(false);
                this.props.signin(4, auth, user, prize, points, school, grade, name, email, phone, quiz,token);
                this.setState({
                    redirectTeacher: true,
                })
            } else if (response === 'success' && auth === 97 && name !== null) {
                this.props.setLoading(false);
                this.props.signin(5, auth, user, prize, points, school, grade, name, email, phone, quiz,token);
                this.setState({
                    redirectAdmin: true,
                })
            } else {
                this.props.setLoading(false);
                alert("Failed");
            }
        });
        this.props.setLoading(false);
    }


    render() {

        if (this.state.redirectAdmin) {
            return (<Navigate to={"/admin"} />);
        } else if (this.state.redirectTeacher) {
            return (<Navigate to={"/teacher"} />);
        } else if (this.state.redirectUser) {
            return (<Navigate to={"/user"} />);
        } else if (this.state.redirectForgot) {
            return (<Navigate to={"/forgot"} />);
        } else if (this.state.redirectQuiz) {
            return (<Navigate to={"/quiz"} />);
        } else if (this.state.redirectDisclaimer) {
            return (<Navigate to={"/disclaimer"}/>);
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                document.getElementById('signInButton').click();
            }
        }

        return (
            <div className='signinForm'>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr><td>
                            <h1>Sign In</h1>
                        </td></tr>
                        <tr><td>
                            <label htmlFor="email" >Email </label>
                        </td></tr>
                        <tr><td>                
                            <input id='email' name='user' type='text' placeholder='Example@email.com'></input>
                        </td></tr>
                        <tr><td>
                            <label htmlFor="Password">Password</label>
                        </td></tr>
                        <tr><td>
                            <input id='pass' name='pass' type='password' placeholder='********' onKeyDown={handleKeyDown}></input>
                        </td></tr>
                        <tr><td>
                            <button id='signInButton' onClick={this.signIn}>Go!</button><Link to={"/forgot"}>Forgot Password?</Link>
                        </td></tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div> /***/
        )
    }
}







export default Signin;