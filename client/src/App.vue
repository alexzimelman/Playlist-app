<template>

    <div id="app">
    <v-app>
           <header-page />
      <v-content>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>

</template>

<script>
import HeaderPage from '@/components/Header.vue' 
export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
