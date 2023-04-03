<script  lang="ts">
    export default {
      // state
      data() {
        return {
          email:"",
          emailver:"",
          password:"",
          passwordver:"",
          name:""
        }
      },
      // actions
      methods: {
        debug (a:any,b:any,c:any,d:any) {
          console.log(a)
          console.log(b)
          console.log(c)
          console.log(d)
        },
        signup (email:string,pass:string,name:string){
          const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email:email,
                pass:pass,
                name:name
              }),
            };
        
          fetch("http://localhost/LearningLab/api/php/user_account/create.php",requestOptions).then(res => res.json()).then(result => {
              console.log(result);
              if(result.response == "success")
              {
                this.$router.push({name: 'dashboard', params:result,})
              }
          });
        }
      }
    }
</script>
<template>
    <div class="about">
      
        <table><thead><tr><th></th><th><h1>Sign Up</h1></th></tr></thead><tbody><tr><td>
      <label for="email">Email</label>
      </td><td>
      <input id="email" v-model="email" placeholder="john.doe@example.com" />
    </td></tr><tr><td>
      <label for="emailver">Email Verification</label>
      </td><td>
      <input id="emailver" v-model="emailver" placeholder="john.doe@example.com" />
    </td></tr><tr><td>
      <label for="name">Email Verification</label>
      </td><td>
      <input id="name" v-model="name" placeholder="John Doe" />
    </td></tr><tr><td>
      <label for="password">Password</label>
      </td><td>
      <input id="password" v-model="password" placeholder="*********" />
    </td></tr><tr><td>
      <label for="passwordver">Password Verification</label>
      </td><td>
      <input id="passwordver" v-model="passwordver" placeholder="*********" />
    </td></tr><tr><td><button>Forgot?</button></td><td>
      <button @click="signup(email,password,name)">Sign Up</button>
      </td></tr></tbody><tfoot></tfoot></table>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  