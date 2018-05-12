const {Song} = require('../models')


module.exports = {
    async getSongs (req, res){
        try{
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
           
        } catch(err) {
            res.status(500).send({
                error:'An error has occured trying to fetch the songs. Please try again.'
            })
        }
    },

    async post (req, res){
        try{
            const song = await Song.create(req.body)
            res.send(song)
           
        } catch(err) {
            res.status(500).send({
                error:'An error has occured trying to create the song. Please try again.'
            })
        }
    }
}