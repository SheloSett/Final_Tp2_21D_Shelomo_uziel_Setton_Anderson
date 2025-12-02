import express from 'express'
import ProductRouter from './router/product.router.js'
import ProductAdminRouter from './router/product.admin.router.js'
import morgan from 'morgan'


const server = express()
server.use(express.json())
server.use(morgan)
server.use("/api/v1", ProductRouter)
server.use("/api/v1", ProductAdminRouter)


export default server;