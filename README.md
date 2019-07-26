# Build a Nodejs RESTfull API uses jsonwebtoken(JWT) to show you how JWT works
![Image](https://raw.githubusercontent.com/ptienchuan/nodejs-jsonwebtoken-restfull-api/master/nodejs-jwt.png)

## Packages
I'll build a simple Nodejs RESTfull API:
* express: to create server
* bcrypt: to encrypt password
* jsonwebtoken: of course

## What does using JWT do that for in this demo?
1. What is the matter here?

    * As you know, RESTfull API has a principle is stateless(server don't store the client's state), that mean we won't use session.

    * A little example: there has a website only allow their member to create posts. Of course the member had to signed in before used. So if the server didn't store session, how we should know the requests came from a member?

2. How can I solve that matter?

    * when user signed in, we'll create a token from the user account by JWT and send the token back.

    * For each request, we'll get the token from headers, and encode this token to know who is sending the request.


In this demo, I'll use JWT only. I won't mention to why JWT is safe or what is JWT or JWT's structure ...


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
    └── constant.js            # store JWT secret key and user's info(username, password, email) instead of database

## How to run the API?
1. Clone source code by git:

    `$ git clone https://github.com/ptienchuan/nodejs-jsonwebtoken-restfull-api.git`
2. Using npm installs packages:

    `$ npm install`
3. Using node starts the server:

    `$ node app.js`
    
    The server will be run on port 3000, so please make sure the port is free
    
## How the API works?
1. API Server

2. Authenticate and create token

3. Verify the token in request

4. Access to CRUD process