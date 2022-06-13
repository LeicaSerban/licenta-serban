
const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({

    common_name:{
        type: String
    }    
    
});


const TeamModule = mongoose.model("team", teamSchema);

module.exports = TeamModule;
