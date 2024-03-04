const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Controller login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra email tồn tại
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email not found' });
        }

        // Kiểm tra mật khẩu
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Tạo JWT
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Trả lại token cho client
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller create User
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Kiểm tra xem email hoặc tên người dùng đã tồn tại trong cơ sở dữ liệu chưa
        const existingUser = await User.findOne({ $or: [{ email }] });
        if (existingUser) {
            // Nếu tìm thấy email hoặc tên người dùng trong cơ sở dữ liệu, trả về một thông báo lỗi
            return res.status(400).json({ message: 'Email already exists' });
        }
        
        // Mã hoá mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10); // Số lượt lặp mã hoá là 10
        
        // Tạo người dùng mới với mật khẩu đã mã hoá
        const newUser = await User.create({ username, email, password: hashedPassword, role: "65d9c80f8780848631d49b69" });
        
        // Trả về thông báo thành công
        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        // Trả về thông báo lỗi nếu có lỗi xảy ra trong quá trình đăng ký
        res.status(500).json({ message: error.message });
    }
}