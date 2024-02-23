const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./api/routes/productRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const userRoutes = require('./api/routes/userRoutes');
const roleRoutes = require('./api/routes/roleRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Route handler for products
app.use('/product', productRoutes);
// Route handler for categorya
app.use('/category', categoryRoutes);
// routes handler for user
app.use('/user', userRoutes);
//routes handler for role
app.use('/role', roleRoutes);

// Default route handlers
app.get('/', (req, res) => {
    res.send('Hello node api!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
