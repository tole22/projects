const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const productRoutes = require('./routes/products');

//settings
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/products', productRoutes);

//static files

app.listen(3000, () => {
    console.log('server on port', 3000);
})