const express = require('express');
const connect = require('./config/connect');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const userRoute = require('./routes/user.route');
const ProductRoute = require('./routes/product.route');
const CartRoute = require('./routes/cart.route');
const AdoraaRoute = require('./routes/adoraa.route');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/products', ProductRoute);
app.use('/cart', CartRoute);
app.use('/adoraa', AdoraaRoute);



app.get('/', (req, res) => {
    res.send({ 'success': 'Hell0' });
});


app.listen(PORT, async () => {
    await connect()
    console.log(`Server is running on port ${PORT}`);
});

