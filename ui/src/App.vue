<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Übersicht</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/stations" class="nav-link">Stationen</router-link>
        </li>
<!--        <li class="nav-item">-->
<!--          <router-link to="/add" class="nav-link">...</router-link>-->
<!--        </li>-->
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {onMounted, ref} from 'vue'

export default defineComponent({
  name: "App",
});
</script>
