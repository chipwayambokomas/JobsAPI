

# JobsAPI

In this project I ceated an API for a Job tracker, it allows a user to login or register and once done the server will pass a jsonWebToken to the user allowing the user to create, delete, edit and display jobs only for said user.

# API Documentation

You can view the API documentation when launching the application in your IDE or you can simply follow the link below to the live application hosted on the Heroku cloud:

https://chipwayambokomas-job-api-v0.herokuapp.com/


## What I Learned

* I learnt how to use momgoose instant methods to carry out pre-determined functions in controllers
* I learnt how to use mongoose to display user friendly errors
* I learnt how to use bcrypt to store hashed user passwords safely as well as compare them to the ones stored in the database everytime a login attempt is made
* I learnt how to use the jsonwebtoken library to send and verify tokens in order to allows access to routes and data
* I learnt how to use postman to obtain the API documentation, apimatic to format it correctly and swaggerUI/YAML to display and test it in a user friendly manner
* I learnt how to host a live server application on the Heroku cloud that can be accessed by any potential user of the API
* I learnt how to use Cross Origin Resource Sharing (CORS) to allow my server to indicate any origins other than its own from which a browser should permit loading resources 
* I learnt how to use Express Rate Limit to limit the number of requests a user can make within a specific period of time
* I learnt how to use the XSS library to protect the server from malicious code in user requests
* I learnt how to use the Helmet library to add and remove http headers to comply with web security standards

## Dependencies 

* "bcryptjs": "^2.4.3",
* "cors": "^2.8.5",
* "dotenv": "^10.0.0",
* "express": "^4.17.1",
* "express-async-errors": "^3.1.1",
* "express-rate-limit": "^5.3.0",
* "helmet": "^4.6.0",
* "http-status-codes": "^2.1.4",
* "jsonwebtoken": "^8.5.1",
* "mongoose": "^5.13.2",
* "swagger-ui-express": "^4.1.6",
* "xss-clean": "^0.1.1",
* "yamljs": "^0.3.0"
* "nodemon": "^2.0.9"
