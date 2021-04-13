import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleWare.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


dotenv.config()

connectDB()

const app = express()

//to acccept json in request body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

//fallback for 404 errors
app.use(notFound)

//error middleware to override default error handler
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`))