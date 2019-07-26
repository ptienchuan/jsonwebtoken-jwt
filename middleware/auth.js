const jwt = require('jsonwebtoken');
const { jwtSecretKey, users } = require('../constant');

module.exports = (req, res, next) => {
    // token is stored in headers:
    // "authorization-token": Bearer <token>
    let token = req.headers['authorization-token'];
    
    if (typeof token === undefined) {
        res.sendStatus(401);
    }

    try {
        // verify token
        token = token.split(' ')[1];
        let user = jwt.verify(token, jwtSecretKey);
        
        if (users[user.us].email === user.email) {
            // when token is valid, push client info to req.clientUser that can be used in controller
            req.clientUser = {
                userName: user.us,
                userEmail: user.email
            }
            next();
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.sendStatus(401);
    }
}