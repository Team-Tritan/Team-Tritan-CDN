const mongoose = require('mongoose');

const infractionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    targetID: String,
    targetTag: String,
    ModeratorID: String,
    ModeratorTag: String,
    InfractionType: String,
    Reason: String,
    Time: String
});

module.exports = mongoose.model('Infractions', infractionsSchema, 'Infractions');
