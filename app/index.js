import config from './config/index.js';
import express from 'express'
import { appRouter } from './routes/index.js';
import { errorHandler, logErrors } from './middlewares/error.handler.js';


const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message:"Hello from RPiDetect API!"})
})

// Initialize Router
appRouter(app)

// Error middlewares
app.use(logErrors)
app.use(errorHandler)

const port = config.serverPort
// Server listen
app.listen(port, ()=>{
    console.log("Server listening to port: " + port);
})
