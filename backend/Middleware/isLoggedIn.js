const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({
            status: "failure",
            message: "Please login first"
        });
    }
    next();
};

// Export the middleware function directly
module.exports = isLoggedIn;