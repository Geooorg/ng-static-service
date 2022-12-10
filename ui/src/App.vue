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
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
// import { connect } from "nats"
import {WebSocketService} from "@/services/WebSocketService"

export default defineComponent({
  name: "App",

  data() {
    return {
      connection: {} as WebSocket,
      wss: {} as WebSocketService
    }
  },

  methods: {},

  mounted() {

    // const servers = [
    //   { servers: "localhost:4222" },
    // ];
    // servers.forEach(async (v) => {
    //   try {
    //     const nc = await connect(v);
    //     console.log(`connected to ${nc.getServer()}`);
    //     // this promise indicates the client closed
    //     const done = nc.closed();
    //     // do something with the connection
    //
    //     // close the connection
    //     await nc.close();
    //     // check if the close was OK
    //     const err = await done;
    //     if (err) {
    //       console.log(`error closing:`, err);
    //     }
    //   } catch (err) {
    //     console.log(`error connecting to ${JSON.stringify(v)}`);
    //   }
    // });


    this.connection = new WebSocket("ws://localhost:4444")
    this.wss = new WebSocketService(this.connection)
  },
});
</script>
