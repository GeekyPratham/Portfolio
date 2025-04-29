const dotenv = require('dotenv');
dotenv.config();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            Message: "invalid user"
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        if (decode.userId) {
            req.userId = decode.userId;
            next();
        } else {
            res.status(403).json({
                Message: "invalid user"
            });
        }
    } catch (err) {
        res.status(403).json({
            Message: "invalid user"
        });
    }
};


module.exports = { authMiddleware };
