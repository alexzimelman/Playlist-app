<template>

    <v-layout colum>
     <v-flex xs6 offset-xs3>
         <songs-search-panel />
         <songs-panel class="mt-3"/>
     </v-flex>
</v-layout>

</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from '@/components/Songs/SongsPanel'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel'
export default {
    components: {
        SongsPanel, SongsSearchPanel
    },
    data(){
        return{
            songs: null
          
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
