
import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const productSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 200,
      required: true  
    },
    stockAmount: {
      type: Number,
      required: true
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "product", // tableName → collection
    versionKey: false,  // desactiva "__v"
  }
);

// Crea el modelo
export const ProductModel = mongoose.model("Product", productSchema);