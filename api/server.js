const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');


// Instantiate an empty express app
const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// Use the routes
// First argument: the path
// Second agrument: the router file
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);

// Start running the server at a particular port
app.listen(4000, () => {
  console.log('server running on port 4000');
})