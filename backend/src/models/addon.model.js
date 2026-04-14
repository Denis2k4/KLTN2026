const addonSchema = new mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Addon', addonSchema);