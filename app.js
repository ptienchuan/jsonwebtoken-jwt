const express = require('express');
const tokenRouter = require('./router/tokenRouter');
const postRouter = require('./router/postRouter');
const authMiddleware = require('./middleware/auth');

const app = express();

app.use(tokenRouter); // tokenRouter can be accessed without token
app.use(authMiddleware); // verify token; if token is not valid, postRouter can't be accessed
app.use(postRouter);

app.get('/', (req, res) => {
    res.send("Runing!");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});