import api from '@/services/api'

export default {
    getSongs (search){
        return api().get('songs', {
            params: {
                search: search 
            }
        })
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
