const mongoose = require('mongoose');

const adoraaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

const Adoraa = mongoose.model('Adoraa', adoraaSchema);
module.exports = Adoraa;