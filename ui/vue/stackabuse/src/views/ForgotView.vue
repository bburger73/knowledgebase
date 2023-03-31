<script  lang="ts">
    export default {
      // state
      data() {
        return {
          email:"",
        }
      },
      // actions
      methods: {
        debug (a:any) {
          console.log(a)
        }
      }
    }
</script>
<template>
  <div class="about">
    <table>
      <thead><tr><th></th><th><h1>Forgot</h1></th><th></th></tr></thead>
      <tbody>
        <tr>
          <td>
            <label for="email">Email</label>
          </td>
          <td>
            <input id="email" v-model="email" placeholder="john.doe@example.com" />
          </td>
          <td>
            <button @click="debug(email)">Send Email</button>
          </td>
          <td></td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
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
