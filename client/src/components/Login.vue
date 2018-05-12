<template>
<v-layout colum>
  <v-flex xs6 offset-xs3>
    <panel title="Login">

        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
      <br>
         <v-text-field
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
    <br>
       <div class="error" v-html="error"></div>

       <br>

       <v-btn class="cyan" @click="login" dark>Login</v-btn>
  

    </panel>

  </v-flex>
</v-layout>

</template>

<script>

import authService from '@/services/authService'
import Panel from '@/components/Panel'
export default {
  name: 'HelloWorld',
  data () {
      return{
        email: '',
        password: '',
        error: ''
      }
    },
    methods:{
      async login(){
        try {
          const response = await authService.login({
          email: this.email,
          password: this.password
        })  
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        } catch(error) {
          this.error = error.response.data.error
        }
      }
    },
    components: {
      Panel
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>