<template>
      <panel title="Song Info">
                <v-layout>
                    <v-flex xs6>
                        <div class="songData">
                            <div class="song-title">
                                {{song.title}}
                            </div>
                            <div class="song-artist">
                                {{song.artist}}
                            </div>
                            <div class="song-genre">
                                {{song.genre}}
                            </div>
                        </div>

                        <v-btn dark class="green" :to="{name: 'song-edit', params() { return {songId:song.id}} }">Edit</v-btn>
                    </v-flex>

                    <v-flex xs6>
                        <img class="album-image" :src="song.albumImage"/>
                        <br>
                        {{song.album}}
                    </v-flex>

                </v-layout>
        </panel>
</template>

<script>


export default {
    props:[
        'song'
    ],
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

    .songData{
        padding-top: 100px;
    }
</style>
