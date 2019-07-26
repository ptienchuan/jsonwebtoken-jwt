# Build a Nodejs RESTfull API use jsonwebtoken(JWT) authentication for each request
![Image](https://raw.githubusercontent.com/ptienchuan/nodejs-jsonwebtoken-restfull-api/master/nodejs-jwt.png)

## Packages to use
I'll build a simple Nodejs RESTfull API:
* express: to create API server
* bcrypt: to encrypt or decrypr password
* jsonwebtoken: of course

## What does the demo do?

## Structure
    .
    ├── middleware
    |   └── auth.js            # verify token
    |
    ├── router
    │   ├── postRouter.js      # router to hande CRUD posts
    │   └── tokenRouter.js     # router to hande get token
    |
    ├── app.js                 # server
    |
    └── constant.js            # store jwt secret key and user's info(username, password, email) instead of database

## How to run the demo?
1. Clone source code by git:

    `$ git clone https://github.com/ptienchuan/nodejs-jsonwebtoken-restfull-api.git`
2. Using npm install packages:

    `$ npm install`
3. Using node start the server:

    `$ node app.js`
    
    The server will be run on port 3000, so please make sure the port is free
    
## How the demo works?
