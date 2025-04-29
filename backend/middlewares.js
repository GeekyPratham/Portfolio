const dotenv = require('dotenv');
dotenv.config();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            Message: "invalid user"
        });
    }
    // console.log("got the token successfully")
    // console.log(token)

    // verify the token
    const token = authHeader.split(' ')[1];

    try {
        // console.log("to verify")
        const decode = jwt.verify(token, JWT_SECRET);
        // console.log(decode)
        if (decode.email) {
            req.email = decode.email;
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
