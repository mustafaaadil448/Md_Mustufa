import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

// Middleware to authenticate user based on JWT token
export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
// Extract token from cookies or Authorization header
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token missing",
            error: true,
            success: false,
        });
    }
// If token is not present, return unauthorized response
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    message: "Invalid token",
                    error: true,
                    success: false,
                });
            }
            return decoded;
        });
        // Verify the token using JWT secret
        req.user = decoded;
        console.log("User authenticated:", req.user);
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Invalid token",
            error: true,
            success: false,
        });
    }
}

// only for admin users
export const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({
            message: "Access denied, admin only",
            error: true,
            success: false,
        });
    }
}
