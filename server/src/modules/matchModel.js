const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
    home_team_name: {
        type: String,
    },

    away_team_name: { 
        type: String
    }
})

const MatchModule = mongoose.model('matche', matchSchema)

module.exports = MatchModule
