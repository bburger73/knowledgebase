<script  lang="ts">
    export default {
      // state
      data() {
        return {
          email:"",
          emailver:"",
          password:"",
          passwordver:"",
        }
      },
      // actions
      methods: {
        debug (a:any,b:any,c:any,d:any) {
          console.log(a)
          console.log(b)
          console.log(c)
          console.log(d)
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
      <label for="email">Email Verification</label>
      </td><td>
      <input id="email" v-model="emailver" placeholder="john.doe@example.com" />
    </td></tr><tr><td>
      <label for="password">Password</label>
      </td><td>
      <input id="password" v-model="password" placeholder="*********" />
    </td></tr><tr><td>
      <label for="passwordver">Password Verification</label>
      </td><td>
      <input id="passwordver" v-model="passwordver" placeholder="*********" />
    </td></tr><tr><td><button>Forgot?</button></td><td>
      <button @click="debug(email,emailver,password,passwordver)">Sign Up</button>
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
  