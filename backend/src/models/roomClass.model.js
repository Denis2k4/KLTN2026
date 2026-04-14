const roomClassSchema = new mongoose.Schema({
    class_name: String,

    features: [
        {
            name: String
        }
    ],

    bed_types: [
        {
            type: String,
            num_beds: Number
        }
    ],

    prices: [
        {
            price: Number,
            start_date: Date,
            end_date: Date
        }
    ]
});

module.exports = mongoose.model('RoomClass', roomClassSchema);