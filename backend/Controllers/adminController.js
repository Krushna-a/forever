const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({
                status: "failure",
                message: "Username and password are required"
            });
        }

        // Check admin credentials
        if (username != process.env.ADMIN_USERNAME || 
            password != process.env.ADMIN_PASSWORD) {
            return res.status(401).json({
                status: "failure",
                message: "Invalid Credentials"
            });
        }

        // Generate token
        const token = jwt.sign(
            { username, isAdmin: true },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            status: "success",
            message: "Admin login successful",
            token
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            status: "failure",
            message: "Server error during login"
        });
    }
};

module.exports = { adminLogin };