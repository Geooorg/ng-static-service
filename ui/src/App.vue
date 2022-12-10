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

  <div id="messages">
    <div v-if="messages.length">
      <p>Result from API: ({{ messages.length }})</p>
      <p v-for="(message, index) in messages" v-bind:key="index">{{ index }} - {{ message }}</p>
    </div>
  </div>
</template>


<script>
import {defineComponent} from "vue"
import {connect, StringCodec} from 'nats.ws/nats.cjs'

export default defineComponent({
  name: "App",

  data() {
    return {
      messages: [],
      connection: undefined,
      status: undefined,
      server: 'ws://127.0.0.1:4444',
      subject: "warningMessage.received.sender-service.central",
    }
  },
  created() {
    void this.connectToNATS();
  },
  methods: {
    connectToNATS: async function () {
      const nc = await connect({servers: this.server})
      console.log(nc.status())
      const sc = StringCodec()
      const sub = nc.subscribe(this.subject)

      void await (async () => {
        for await (const m of sub) {
          this.messages.push(sc.decode(m.data))
          console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`)
        }
        console.log("subscription closed")
      })()
    },

  },

  mounted() {
    // this.connection = new WebSocket("ws://localhost:4444")
    // this.wss = new WebSocketService(this.connection)
  },
});
</script>
