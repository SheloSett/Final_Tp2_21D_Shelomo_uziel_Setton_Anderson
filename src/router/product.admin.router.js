import express from 'express'
import { ProductController } from '../controllers/product.controller.js';
import { apiKeyMiddleware } from '../middlewares/auth.Middleware.js';

const ProductAdminRouter = express.Router()

ProductAdminRouter.put("/productos/:id", apiKeyMiddleware, ProductController.updateById)
ProductAdminRouter.delete("/productos/:id", apiKeyMiddleware, ProductController.deleteById)



export default ProductAdminRouter;