import express from 'express'
import { ProductController } from '../controllers/product.controller.js';
const ProductRouter = express.Router()

ProductRouter.post("/productos", ProductController.createProduct)
ProductRouter.get("/productos", ProductController.getAllProducts)
ProductRouter.get("/productos/:id", ProductController.getProductById)


export default ProductRouter;