const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connect = () => {
    return mongoose.connect("mongodb+srv://apux:1j9ugnHyv4zTe6nP@masai.21uwirt.mongodb.net/anishapi?retryWrites=true&w=majority");
};

module.exports = connect;