const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./api/routes/productRoutes');
const imagePostRoutes = require('./api/routes/imagePostRoutes');
const imageProductRoutes = require('./api/routes/imageProductRoutes');
const postRoutes = require('./api/routes/postRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const userRoutes = require('./api/routes/userRoutes');
const authRoutes = require('./api/routes/authRoutes');
const roleRoutes = require('./api/routes/roleRoutes');
const routeImages = require('./api/routes/upload');
const routeCart = require('./api/routes/cartRoutes');
const routeCartDetails = require('./api/routes/cartDetailsRoutes');
const routeOrder = require('./api/routes/orderRoutes');
const routeOrderDetails = require('./api/routes/orderDetailsRoutes');
const routeOrderStatus = require('./api/routes/orderStatusRoutes');
const searchRoutes = require('./api/routes/searchRoutes');


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
app.use('/api/uploadimagepost', imagePostRoutes);
app.use('/api/uploadimageproduct', imageProductRoutes);
app.use('/api/post', postRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/cart', routeCart);
app.use('/api/cartdetails', routeCartDetails);
app.use('/api/order', routeOrder);
app.use('/api/orderdetails', routeOrderDetails);
app.use('/api/orderstatus', routeOrderStatus);
app.use('/api/search', searchRoutes); 




app.get('/api/', (req, res) => {
    res.send('Hello!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
