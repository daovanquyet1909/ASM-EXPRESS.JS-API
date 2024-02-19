const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./api/routes/productRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Route handler for products
app.use('/product', productRoutes);

// Default route handlers
app.get('/', (req, res) => {
    res.send('Hello node api!');
});

app.get('/blog', (req, res) => {
    res.send('Hello blog!!!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
