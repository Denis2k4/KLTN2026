const roomSchema = new mongoose.Schema({
    room_number: String,

    floor: Number,

    status: {
        type: String,
        enum: ['available', 'occupied', 'maintenance'],
        default: 'available'
    },

    room_class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomClass'
    }
});

module.exports = mongoose.model('Room', roomSchema);