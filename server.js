import express from 'express'
import 'dotenv/config'
import todoRouter from './routes/todoRoutes.js'
import { logger } from './middlewares/logger.js'
import ErrorHandler from './middlewares/errorHandler.js'
import { dbConnect } from './config/config.js'
const app = express()
app.use(express.json())
app.use(logger)

const port = process.env.PORT || 8000

app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: 'pong', status: 'up' })
})

app.use('/api/', todoRouter)

app.use(ErrorHandler)

dbConnect()

app.listen(port, () => {
  console.log('Server is running on port', port)
})

