const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object you can use this asgain as a starting point for future projects
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:{db.port}`)
})