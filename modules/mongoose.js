const mongoose = require('mongoose')

// connect mongoose to the database
async function mongo() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Mongoose connected to database')
        
    } catch (error) {
        console.log(error)
    }
        
}

module.exports = mongo