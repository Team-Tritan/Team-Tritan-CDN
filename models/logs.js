const mongoose = require('mongoose');

const logsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildName: String,
    guildID: String,
    events: String,
    joinLeave: String
});

module.exports = mongoose.model('Logs', logsSchema, 'Logs');
