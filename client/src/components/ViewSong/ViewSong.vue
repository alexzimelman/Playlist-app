<template>
    <div>
    <v-layout >
     <v-flex xs6 >
          <song-metadata :song="song" />
     </v-flex>

    <v-flex xs6 class="ml-1">
        <you-tube-view :youtubeId="song.youtubeId" />
    </v-flex>
    </v-layout>

    <v-layout>
        <v-flex xs6 class=" mt-1">
            <tab :song="song" />
        </v-flex>

        <v-flex xs6 class="ml-1 mt-1">
            <lyrics :song="song" />
        </v-flex>


    </v-layout>

    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTubeView from '@/components/ViewSong/YouTubeView'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'

export default {
    data(){
        return {
            song: {}
        }
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components: {
     SongMetadata, YouTubeView, Lyrics, Tab
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
