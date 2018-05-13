<template>

    <v-layout colum>
     <v-flex xs6 offset-xs3>
        <panel title="Songs">

            
                <v-btn fab class="cyan accent-3" light small absolute right middle slot="action" @click="navigateTo({name: 'songs-create'})">
                    <v-icon>add</v-icon>
                </v-btn>
           
            
            <div v-for="song in songs" :key="song.id" class="song">
                <v-layout>
                    <v-flex xs6>
                        <div class="song-title">
                            {{song.title}}
                        </div>
                        <div class="song-artist">
                            {{song.artist}}
                        </div>
                        <div class="song-genre">
                            {{song.genre}}
                        </div>

                        <v-btn dark class="cyan" @click="navigateTo({name: 'song', params: {songId: song.id}}) ">View</v-btn>
                    </v-flex>

                    <v-flex xs6>
                        <img class="album-image" :src="song.albumImage"/>
                    </v-flex>

                </v-layout>
            </div>
        </panel>
     </v-flex>
</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        Panel
    },
    data(){
        return{
            songs: null
          
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted(){
        //request for backend for all the songs
        this.songs = (await SongsService.getSongs()).data
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .song{
        padding: 20px;
        height: 330px;
        overflow: hidden;
    }

    .album-image{
        width: 70%;
        margin: 0 auto;
    }

    .song-title{
        font-size: 30px;
    }

    .song-artist{
        font-size: 24px;    
    }

    .song-genre{
        font-size: 18px;
    }
</style>
