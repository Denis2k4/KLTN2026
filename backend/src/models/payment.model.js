const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    },

    amount: Number,

    method: {
        type: String,
        enum: ['cash', 'momo', 'vnpay']
    },

    status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    }

}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);