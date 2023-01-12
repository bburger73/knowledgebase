<script setup lang="ts">
defineProps<{
    // email: string;
    // password: string;
    // namein: string;
}>();
</script>

<template>
    <div class="about">
        <h1>Settings</h1>
        <table><thead></thead><tbody><tr><td>
            <label for="email">Email</label>
        </td><td>
            <input id="email" placeholder="john.doe@example.com" />
        </td></tr><tr><td>
            <label for="email">Email Verification</label>
        </td><td>
            <input id="email" placeholder="john.doe@example.com" />
        </td></tr><tr><td>
        </td><td>
            <button onclick="updateEmail">Update Email</button>
        </td></tr><tr><td>
            <label for="password">Password</label>
        </td><td>
            <input id="password" placeholder="*********" />
        </td></tr><tr><td>
            <label for="passwordver">Password Verification</label>
        </td><td>
            <input id="passwordver" placeholder="*********" />
        </td></tr><tr><td></td><td>
            <button onclick="updatePass">Update Password</button>
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
  