import express from 'express'
import ProductRouter from './router/product.router.js'
import ProductAdminRouter from './router/product.admin.router.js'
// import morgan from 'morgan'
import csvRouter from './router/csv.router.js'


const server = express()
server.use(express.json())
// server.use(morgan) me tiraba error
server.use("/api/v1", ProductRouter)
server.use("/api/v1", ProductAdminRouter)
server.use("/api/v1", csvRouter);


export default server;