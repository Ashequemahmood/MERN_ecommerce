const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
const rateLimit = require('express-rate-limit')
const userRouter = require('./routers/userRouter')
const seedRouter = require('./routers/seedRouter')
const { errorResponse } = require('./controllers/responseController')
const app = express()

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    message: 'too many request, please try again later',
	limit: 5,
})

app.use(limiter)
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", userRouter);
app.use('/api/seed', seedRouter);



app.get('/test', (req, res) => {
  res.status(200).send({
    message: "api is working fine"
  })
})



// client error handling
app.use((req,res,next)=> {
  next(createError(404, "Router not found"))
})

// server error handling
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message
  })
})

module.exports = app;