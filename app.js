require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')


// connectDB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication');

// routers
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Swagger
const swaggerUI = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocument = yaml.load('./swagger.yaml')

app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

app.set('trust proxy', 1);
app.set
app.use(rateLimit({
  windowMs: 15*60*1000,
  max:100
}))

// extra packages

// routes
app.use('/api/v1/auth', authRouter)
// if you stick the middleware infront of the route then all routes will be authenticated
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.get('/', (req,res) =>{
  res.send('<h1>Jobs API </h1><a href="/api-docs">Docs</a>')
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
