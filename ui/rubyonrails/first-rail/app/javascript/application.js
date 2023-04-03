import "@hotwired/turbo-rails"
import "controllers"
// import * as bootstrap from "bootstrap"

function signup() {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value,
            name: document.getElementById("name").value
        }),
    };

    fetch("http://localhost/LearningLab/api/php/user_account/create.php", requestOptions).then(res => res.json()).then(result => {
        console.log(result);
        if (result.response == "success") {
            window.location.href='signin';
        }
    });
}

function signin (email,pass){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value
        }),
      };
  
    fetch("http://localhost/LearningLab/api/php/user_account/read.php",requestOptions).then(res => res.json()).then(result => {
        console.log(result);
        if(result.response == "success")
        {
            window.location.href='dashboard';
        }
    });
  }
  
function forgot(email) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: document.getElementById("email").value
        }),
    };

    fetch("http://localhost/LearningLab/api/php/user_forgot/create.php", requestOptions).then(res => res.json()).then(result => {
        console.log(result);
        if (result.response == "success") {
            window.location.href='signin';
        }
    });
}

document.getElementById('signup')?.addEventListener("click", signup);
document.getElementById('signin')?.addEventListener("click", signin);
document.getElementById('forgot')?.addEventListener("click", forgot);


