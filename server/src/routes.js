const authController = require('./controllers/authController')

const AuthControllerPolicy = require('./policies/authControllerPolicy')

module.exports = (app) => {
    app.post('/register',
    AuthControllerPolicy.register, 
    authController.register)

    app.post('/login',
    authController.login)
}