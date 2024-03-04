const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./api/routes/productRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const userRoutes = require('./api/routes/userRoutes');
const authRoutes = require('./api/routes/authRoutes');
const roleRoutes = require('./api/routes/roleRoutes');
const routeImages = require('./api/routes/upload');
const app = express(); // Khai báo biến app trước khi sử dụng nó
const port = process.env.PORT || 3000;

// Sử dụng middleware CORS
app.use(cors());

// Connect to MongoDB
connectDB();
app.use(express.json());

// All Routes this here
app.use('/api/auth', authRoutes);
app.use('/api/image', routeImages);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);




app.get('/api/', (req, res) => {
    res.send('Hello!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
