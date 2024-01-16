const db =  {
    database : process.env.DB_NAME || 'fullStackDb1',
    user: process.env.DB_USER || 'dbUser1',
    password: '',
    options: {
        dialect: 'sqlite',
        host: 'localhost',
        storage: './tabtracker.sqlite'
    }
}

module.exports = {db}