const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecretKey, users } = require('../constant');
const tokenRouter = express.Router();

tokenRouter.get('/token', (req, res) => {
    let authorization = req.headers.authorization;
    if (typeof authorization === undefined) {
        res.sendStatus(401); // unauthorized
    }

    // get username and password from headers:
    let authInfo = Buffer.from(authorization, 'base64').toString().split(':');
    let us = authInfo[0];
    let pw = authInfo[1];

    // check valid username and password:
    let valid = bcrypt.compareSync(pw, users[us].pw);

    if (valid) {
        // create token
        let token = jwt.sign(
            {
                us: us,
                email: users[us].email
            },
            jwtSecretKey,
            {
                expiresIn: 30 //30s
            });

        // send token
        res.json({ token });
    }
    else {
        res.sendStatus(401); // unauthorized
    }
});

module.exports = tokenRouter;