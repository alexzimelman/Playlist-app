const authController = require('./controllers/authController')
const songsController = require('./controllers/songsController')
const AuthControllerPolicy = require('./policies/authControllerPolicy')


module.exports = (app) => {
    app.post('/register',
    AuthControllerPolicy.register, 
    authController.register)

    app.post('/login',
    authController.login)

    app.get('/songs',
    songsController.getSongs)

    app.post('/songs',
    songsController.post)
}