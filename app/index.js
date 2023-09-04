import dotenv, { config } from 'dotenv';
dotenv.config();

import express from 'express'
import { appRouter } from './routes/index.js';
import { errorHandler, logErrors } from './middlewares/error.handler.js';

const app = express()

app.use(express.json())

// Initialize Router
appRouter(app)

// Error middlewares
app.use(logErrors)
app.use(errorHandler)


// Server listen
app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server listening to port: " + process.env.SERVER_PORT);
})
