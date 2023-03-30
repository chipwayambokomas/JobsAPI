#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```
# JobsAPI

In this project I ceated an API for a Job tracker, it allows a user to login or register and once done the server will pass a jsonWebToken to the user allowing the user to create, delete, edit and display jobs only for said user.

# API Documentation

You can view the API documentation when launching the application in your IDE or you can simply follow the link below to the live application hosted on the Heroku cloud:

https://chipwayambokomas-job-api-v0.herokuapp.com/


## What I Learned

* I learnt how to use express-async-errors to handle errors
* I learnt how to sort elements dynamically in a request
* I learnt how to receive specific fields dyanmically in a request
* I learnt how to provide page functionality in an API
* I learnt how to provide elements in an API based on only part of their names
* I learnt how to apply numeric filtration in an API request


## Dependencies 

* "body-parser": "^1.20.2",
* "dotenv": "^8.2.0",
* "express": "^4.17.1",
* "mongoose": "^5.11.10"
* "nodemon": "^2.0.7"
* "express-async-errors": "^3.1.1"

