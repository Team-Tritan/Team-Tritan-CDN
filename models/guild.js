const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    guildOwner: String,
    guildOwnerID: String,
    guildCreated: String,
    guildIcon: String,
    prefix: String,
    is_premium: Boolean,
    is_blacklisted: Boolean
});

module.exports = mongoose.model('Guild', guildSchema, 'Guilds');
