const {Song} = require('../models')
const Sequelize = require('sequelize')

module.exports = {
    async getSongs (req, res){
        try{
            let songs = null
            const search = req.query.search
            
            if(search){
                songs = await Song.findAll({
                    where: {
                        $or:[
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else{
                 songs = await Song.findAll({
                    limit: 10
                 })
            }

            res.send(songs)
           
        } catch(err) {
            res.status(500).send({
                error:'An error has occured trying to fetch the songs. Please try again.'
            })
        }
    },


    async show (req, res){
        try{
            const song = await Song.findById(req.params.songId)
            res.send(song)
           
        } catch(err) {
            res.status(500).send({
                error:'An error has occured trying to show the songs. Please try again.'
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
    },

    async put (req, res){
        try{
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(this.body)
           
        } catch(err) {
            res.status(500).send({
                error:'An error has occured trying to update the song. Please try again.'
            })
        }
    }
}