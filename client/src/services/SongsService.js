import api from '@/services/api'

export default {
    getSongs (){
        return api().get('songs')
    },
    show(songId){
        return api().get(`songs/${songId}`)
    },
    post (song){
        return api().post('songs', song)
    },
    put (song){
        return api().put(`songs/${song.id}`, song)
    }
}
