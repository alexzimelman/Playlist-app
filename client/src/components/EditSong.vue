<template>
    <v-layout>
        <v-flex xs4>
        <panel title="Song Info" >
            <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field>
            <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field>
            <v-text-field label="Genre" v-model="song.genre"></v-text-field>
            <v-text-field label="Album" v-model="song.album"></v-text-field>
            <v-text-field label="album Image" v-model="song.albumImage"></v-text-field>
            <v-text-field label="YouTube ID" v-model="song.youtubeId"></v-text-field>
        </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="Lyrics&Tab" class="ml-1">
                <v-text-field label="Tab" v-model="song.tab" multi-line></v-text-field>
                <v-text-field label="Lyrics" v-model="song.lyrics" multi-line></v-text-field>
            </panel>

            <v-btn dark class="cyan" @click="save">Save</v-btn>

            
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data () {
        return{
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImage: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
            required: (value) => !!value || 'Required.'
        }
    },
    methods:{
        async save(){
            const songId = this.$store.state.route.params.songId
            try {
             await SongsService.put(this.song)
             this.$router.push({
                name: 'song',
                params: {
                    songId: songId
                }
            })
            } catch (err) {
                console.log(err);
                
            }
        }
    },
    async mounted() {
            try {
                const songId = this.$store.state.route.params.songId
                this.song = (await SongsService.show(songId)).data

            } catch (err) {
                console.log(err);
                
            }        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
