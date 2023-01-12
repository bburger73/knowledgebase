<script lang="ts">
    export default {        
        mounted (){
            this.debug();
        },
        // state
        data() {
            return {
                name:this.$route.params.name,
                email:this.$route.params.password,
            }
        },
        // actions
        methods: {
            debug(){
                console.log(this.$route.params);
            }
        }
    }
</script>
<template>
    <div class="about">
        <h1>Dashboard</h1>
        <h2>Welcome {{ name }}!</h2>
        <p>{{ email }}</p>
        <div class="dashboard-avatar">
            <img src="./../assets/logo.svg" alt="View logo made easy" />
        </div>
        <button @click="$router.push({name: 'settings', params: { email: 'abc123' },})">Settings</button>
    </div>
</template>
  
<style>
    @import './assets/styles/components.css';
</style>
  