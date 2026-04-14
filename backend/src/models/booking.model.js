const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    checkin_date: Date,
    checkout_date: Date,

    guests: {
        adults: Number,
        children: Number
    },

    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },

    rooms: [
        {
            room: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Room'
            },
            price: Number
        }
    ],

    addons: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],

    total_amount: Number

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);