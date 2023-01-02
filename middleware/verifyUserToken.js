const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const verifyUserToken = (req, res, next) => {

    const token = req.headers.token;

    if (!token) {
        return res.status(401).send("access denied");
    }
    try {
        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);

        if (!verifiedUser) {
            
            res.status(401).send("unauthorized request");
        }
        
        req.user = verifiedUser;
        next();
    } catch (error) {
        
        res.status(400).send("unauthorized token");
    }
};

module.exports = {
    verifyUserToken
};