const logSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    action: String,
    target: String
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);