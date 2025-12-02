import express from 'express'
import { getCsv } from '../services/albums.Service.js';



const csvRouter = express.Router()

csvRouter.get("/albums/csv", getCsv)


export default csvRouter;