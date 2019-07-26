const express = require('express');
const postRouter = express.Router();

postRouter.get('/posts', (req, res) => {
    // req.clientUser can be used to save or update "created_user, ..." field
    res.json({
        type: "get posts",
        clientUser: req.clientUser
    });
});

postRouter.post('/posts', (req, res) => {
    res.json({
        type: "create post",
        clientUser: req.clientUser
    });
});

postRouter.delete('/posts', (req, res) => {
    res.json({
        type: "delete post",
        clientUser: req.clientUser
    });
});

module.exports = postRouter;