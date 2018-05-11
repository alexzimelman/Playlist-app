<template>
    <div id="container">
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4"> 
          <span @click="navigateTo({name: 'root'})" class="home">Playlist App</span>
       </v-toolbar-title>

            <!-- <v-toolbar-items>   
                <v-btn flat dark> Home </v-btn>

            </v-toolbar-items> -->

            <v-spacer></v-spacer>

               <v-toolbar-items>   
                 
                    <v-btn flat dark @click="navigateTo({name: 'register'})" v-if="!$store.state.isLoggedIn"> Sign Up</v-btn>
                   <v-btn flat dark @click="navigateTo({name: 'login'})" v-if="!$store.state.isLoggedIn"> Login</v-btn>

            </v-toolbar-items>

        </v-toolbar>
    </div>

</template>

<script>
export default {
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
    margin-bottom: 150px;
}

.home{
    cursor: pointer;
}
</style>
