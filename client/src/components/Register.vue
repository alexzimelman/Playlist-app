<template>
<v-layout colum>
  <v-flex xs6 offset-xs3>
    <panel title="Register">

        <form name="playlist-form" autocomplete="off">
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
        </form>
    <br>
       <div class="danger" v-html="error"></div>

       <br>

       <v-btn class="cyan" @click="register" dark>Register</v-btn>

    </panel>

  </v-flex>
</v-layout>

</template>

<script>

import authService from '@/services/authService'
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
      async register(){
        try {
          const response = await authService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.user)
        this.$router.push({
          name: 'songs'
        })
        } catch(error) {
          this.error = error.response.data.error
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger{
  color: red;
}

</style>
