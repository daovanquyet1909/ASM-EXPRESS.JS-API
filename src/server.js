const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./api/routes/productRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const userRoutes = require('./api/routes/userRoutes');
const roleRoutes = require('./api/routes/roleRoutes');
const routeImages = require('./api/routes/upload');
const app = express(); // Khai báo biến app trước khi sử dụng nó
const port = process.env.PORT || 3000;

// Sử dụng middleware CORS
app.use(cors());

// Connect to MongoDB
connectDB();
//image
app.use('/image', routeImages)
// Middleware to parse JSON data
app.use(express.json());

// Route handler for products
app.use('/product', productRoutes);
// Route handler for category
app.use('/category', categoryRoutes);
// Routes handler for user
app.use('/user', userRoutes);
// Routes handler for role
app.use('/role', roleRoutes);

// Default route handler
app.get('/', (req, res) => {
    res.send('Hello node api!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
