module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'Playlist-App',
        user: process.env.DB_USER || 'Playlist-App',
        password: process.env.DB_PASS || 'Playlist-App',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './Playlist-App.sqlite'
        }
    }
}