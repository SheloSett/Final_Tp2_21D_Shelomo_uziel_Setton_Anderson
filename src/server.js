import express from 'express'
import ProductRouter from './router/product.router.js'
import ProductAdminRouter from './router/product.admin.router.js'


const server = express()
server.use(express.json())
server.use("/api/v1", ProductRouter)
server.use("/api/v1", ProductAdminRouter)


export default server;