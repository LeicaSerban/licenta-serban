const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    full_name: {
        type: String,
    },

    current_club: { 
        type: String
    }
})

const PlayerModule = mongoose.model('player', playerSchema)

module.exports = PlayerModule
