import React from 'react';
import './global.js';


class Settings extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            userId:0,
        }

        this.state.name = this.props.user.name;
        this.state.email = this.props.user.email;
        this.state.userId = this.props.user.userId;
    }
    

    updateAccountData = () =>
    {
        console.log(this.props.user);
        let name = document.getElementById('name').value;
        let pass = document.getElementById('pass').value;
        let email = document.getElementById('email').value;
        const requestOptions = {
            method: "PUT",
            headers: { 
                "INVOLVED-AUTHKEY": this.props.user.token,
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                pass:pass,
                email:email,
                name:name
            }),
        };
        
        fetch(global.server + 'user_account/update.php',requestOptions).then(res => res.json()).then(result => {
            if(result.result)
            {
                alert('Successfully Updated Your Account!');
                this.props.setAccountData(name,pass,email);
            }
        });
    }


    render() {
        const multiplesInDiv = (
            <div className='signinForm'>
                <h1>Account Manager</h1>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                    <td>
                        <label htmlFor='email'>Email</label>
                    </td>
                    <td>
                    <input id='email' name='email' placeholder={this.state.email} />
                    </td>
                </tr><tr>
                    <td>
                        <label htmlFor='pass'>Password</label>
                    </td>
                    <td>
                    <input id='pass' name='pass' type='password' placeholder='Password'></input>
                    </td>
                </tr><tr>
                    <td>
                        <label htmlFor='name'>Name</label>
                    </td>
                    <td>
                    <input id='name' placeholder={this.state.name}></input>
                    </td>
                </tr>
                </tbody>
                <tfoot></tfoot>
                </table>
                <button onClick={this.updateAccountData}>Update</button>
            </div>
        );

        return multiplesInDiv;
    }
}

export default Settings;