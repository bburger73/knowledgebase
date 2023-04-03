<script  lang="ts">
    export default {
      // state
      data() {
        return {
          email:"",
          password:"",
        }
      },
      // actions
      methods: {
        debug (a:any,b:any,c:any,d:any) {
          console.log(a)
          console.log(b)
        },
        signin (email:string,pass:string){
          const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email:email,
                pass:pass
              }),
            };
        
          fetch("http://localhost/LearningLab/api/php/user_account/read.php",requestOptions).then(res => res.json()).then(result => {
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
      <table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>
      </td><td>
      <h1>Sign In</h1>
      </td></tr><tr><td>
      <label for="email">Email</label>
    </td><td>
      <input id="email" v-model="email" placeholder="john.doe@example.com" />
      </td></tr><tr><td>
      <label for="password">Password</label>
    </td><td>
      <input id="password" v-model="password" placeholder="*********" />
      </td></tr><tr><td>
        <button>Forgot?</button>
      </td><td>
      <button @click="signin(email,password)">Sign In</button>
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
  