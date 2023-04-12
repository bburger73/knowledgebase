import React from 'react';
import './style.css';
import './global.js';


class Forgot extends React.Component {

    sendResetLink = () => {
        let email = document.getElementById('userName').value;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email:email
            }),
        };
        fetch(global.server + 'user_forgot/create.php',requestOptions).then(response => {
            alert('Email has been sent! ' + JSON.stringify(response));
        });
    }

    render() {

        const handleKeyDown = (e) =>{
            if(e.key === 'Enter')
            {
                document.getElementById('forgotButton').click();
            }
        }
        

        return(
            <div className='signinForm'>
                <h1>Forgot Password</h1>
                <label htmlFor="userName">Email</label>
                <input id='userName' name='user' type='text' placeholder='John@example.com' onKeyDown={handleKeyDown}></input>
                <button id='forgotButton' onClick={this.sendResetLink}>Go!</button>
            </div> /***/
        );
    }
}

export default Forgot;