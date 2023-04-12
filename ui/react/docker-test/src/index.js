import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,Routes,
  Route,
  Link,
} from "react-router-dom";
import ReactLoading from 'react-loading';


//User Account
import DashboardUser from './DashboardUser';

import Settings from './Settings';
//import Messenger from './messenger';
import Signin from './Signin';
import Signup from './Signup';
import Forgot from './Forgot';

import './style.css';
import './global.js';


class Carrosell extends React.Component {
    constructor() {
        super();
        // Bind the this context to the handler function
        this.signin = this.signin.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.getPrize = this.getPrize.bind(this);
        this.updateTheir = this.updateTheir.bind(this);
        this.signout = this.signout.bind(this);
        this.setAccountData = this.setAccountData.bind(this);
        this.updatePoints = this.updatePoints.bind(this);
        this.clearQuiz = this.clearQuiz.bind(this);
        this.updatePrize = this.updatePrize.bind(this);
        this.saveState = this.saveState.bind(this);

        this.state = {
            user: {
                userId: 0,
                auth: 9999,
                school: 0,
                classId: 0,
                points: 0,
                prize: 0,
                page: 0,
                grade: 0,
                name: 0,
                email: 0,
                phone: 0,
                quiz: 0,
                theirId: 0,
            },
            navToggle:false,
            isLoading:false,
        }

        if (window.performance) {
            if (performance.navigation.type === 1) {
              let parsedData = JSON.parse(localStorage.getItem('involvedk12state'));
              if(parsedData !== null)
              {
                this.state = parsedData;
              }
            } else {
            }
        }
    }


    setLoading = ball => {
        this.setState({
            isLoading: ball,
        })
    }

    signout = () => {
        this.setState({
            user:{},
            UserId: "",
            Auth: 0,
            Page: 0,
            Prize: 0,
            Points: 0,
            School: 0,
            Grade: 0,
            Name: "",
            Email: "",
            Phone: "",
            Quiz: 0,
            TheirId:0,
        });
        // remove
        localStorage.removeItem('involvedk12state');
    }

    updateTheir = (newTheirId) =>{
        this.setState({
            TheirId: newTheirId,
        })
    }

    getPrize = () =>{
        return this.state.Prize;
    }

    changePrize = (inprize) => {
        alert(inprize);
        this.setState({
            Prize: inprize,
        });
    }


    signin = (value, auth, user,prize,points,school,grade,name,email,phone,quiz,token) => {
        this.setState({
            user:{
                userId: user,
                auth: auth,
                page: value,
                prize: prize,
                points: points,
                school: school,
                grade: grade,
                name: name,
                email: email,
                phone: phone,
                quiz: quiz,
                token:token,
            },
            TheirId:0,
            // UserId: user,
            // Auth: auth,
            // Page: value,
            // Prize: prize,
            // Points: points,
            // School: school,
            // Grade: grade,
            // Name: name,
            // Email: email,
            // Phone: phone,
            // Quiz: quiz,
        });
        
        localStorage.setItem('involvedk12state', JSON.stringify(this.state));
        this.setState({
            isLoading:false,
        })
    }

    saveState = () => {
        localStorage.setItem('involvedk12state', JSON.stringify(this.state));
    }

    setAccountData = (phone,name,email) => {
        if(phone !== ''){
            this.setState({
                Phone: phone,
            });
        }
        if(name !== ''){
            this.setState({
                Name: name,
            });
        }
        if(email !== ''){
            this.setState({
                Email: email,
            });  
        }
    }

    setClass = (classId) => {
        this.setState({
            ClassId: classId,
        })
    }

    getUserId = () => {
        return this.state.UserId;
    }


    toggleNav = () => {
        if(this.state.navToggle)
        {
            this.setState({
                navToggle: false,
            },() => {document.getElementById("navList").style.display = "none"})
        }else{
            this.setState({
                navToggle: true,
            },() => {document.getElementById("navList").style.display = "block"})
        }
    }

    updatePoints = () => {
        fetch(global.server + "getUserPoints.php?UserId=" + this.state.user.userId).then(res => res.json()).then(result => {
            let updatedUser = this.state.user;
            updatedUser.points = result;
            this.setState({
                user: updatedUser,
            })
        }).then(() => {
            setTimeout(this.updatePoints, 30000);
        });
    }


    updatePrize = (inPrize) => {
        let usertwo = this.state.user;
        usertwo.prize = inPrize;
        this.setState({
            user: usertwo,
            prize: inPrize,
            Prize: inPrize
        })
    }
    

    clearQuiz = () => {
        let newUser = this.state.user;
        newUser.quiz = 0;
        this.setState({
            user: newUser,
        })
    }


    /**
     * 
                <button onClick={this.decrementI} className='left' href="/#">Left</button>
                <button onClick={this.incrementI} className='right' href="/#">Right</button>
     */
    render() {

        let publicLinks = "publicLinks";
        let privateLinks = "privateLinks";
        let privateAdminLinks = "privateLinks";
        let privateTeacherLinks = "privateLinks";
        let privateUserLinks = "privateLinks";
        let privateQuizLinks = 'privateLinks';

        if(this.state.user.auth === 9999){
           
        }else if(this.state.user.quiz > 0 && this.state.user.auth === 0)
        {
            publicLinks = "privateLinks";
            privateLinks = "privateLinks";
            privateAdminLinks = "privateLinks";
            privateQuizLinks = "publicLinks";
        }else if(this.state.user.auth === 0)
        {
            publicLinks = "privateLinks";
            privateLinks = "publicLinks";
            privateUserLinks = "publicLinks"; 
            privateQuizLinks = "privateLinks";
        }else if(this.state.user.auth === 52)
        {
            publicLinks = "privateLinks";
            privateLinks = "publicLinks";
            privateTeacherLinks = "publicLinks";
            privateQuizLinks = "privateLinks";
        }else if(this.state.user.auth === 97)
        {
            publicLinks = "privateLinks";
            privateLinks = "publicLinks";
            privateAdminLinks = "publicLinks";
            privateQuizLinks = "privateLinks";
        }
        let loadingBar;
        //if(this.state.isLoading){
            loadingBar = (<div className="loading-screen">
                <img src="InvolvED_LM_2Color-LB.jpg" alt="Involved-Logo" className="signin-logo" />  
                <ReactLoading className="loading-bars" type={"bars"} color="grey" />
            </div>);
        //}

        return (
        <div>
            <Router>
            <div>
              <nav>
                <div className="hamburger" onClick={this.toggleNav}>
                  <div className="topbun"></div>
                  <div className="patty"></div>
                  <div className="bottombun"></div>
                </div>
                <ul id="navList">
                  <li style={{padding:"0px",margin:"0px"}}>
                      <a  href="http://localhost:3000" className="navImageA" >
                          <img id='navImage' src='./logo192-blue.png' alt='headerImg' />
                      </a>
                  </li>
                  <li id="user" className={privateUserLinks}>
                  <Link to="/user">Home</Link>
                  </li>
                  <li id="signin" className={publicLinks}>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li id="signup" className={publicLinks}>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li id="settings" className={privateLinks}>
                  <Link to="/settings">Settings</Link>
                  </li>
                  <li id="signin" className={privateLinks}>
                    <Link to="/signin">Sign Out</Link>
                  </li>
                  <li id="signin" className={privateQuizLinks}>
                    <Link to="/signin">Sign Out</Link>
                  </li>
                </ul>
              </nav>
            {
                (this.state.isLoading?(loadingBar):(
              <Routes>
                <Route exact path="/" element={<Signin setLoading={this.setLoading} signout={this.signout} signin={this.signin}/>}>
                </Route>
                <Route path="/signin" element={<Signin setLoading={this.setLoading} signout={this.signout} signin={this.signin}/>}>
                </Route>
                <Route path="/signup" element={<Signup setLoading={this.setLoading} />}>
                </Route>
                <Route path="/settings" element={<Settings user={this.state.user} setAccountData={this.setAccountData} />}>
                </Route>
                <Route path="/user" element={<DashboardUser saveState={this.saveState} user={this.state.user} updatePoints={this.updatePoints} updatePrize={this.updatePrize}/>}>
                </Route>
                <Route path="/forgot" element={<Forgot />}>
                </Route>
              </Routes>))
            }
            </div>
          </Router>
        </div>
        );
    }
}
/**linkList={linkList} pages={pages}  */

ReactDOM.render(
    <React.StrictMode>
        <Carrosell></Carrosell>
    </React.StrictMode>,
    document.getElementById('root')
);