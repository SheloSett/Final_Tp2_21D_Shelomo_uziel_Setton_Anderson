import { ProductModel } from "../model/Product.model.js"


export const ProductRepository = {
    getAll: async () => {
        return await ProductModel.find({})
    },

    getOne: async (id) => {
        return await ProductModel.findById(id)
    },

    deleteOne: async (id) => {
        return await ProductModel.deleteOne({ _id: id })
    },

    updateOne: async (id , { name, stockAmount, created_date }) => {
        return await ProductModel.updateOne(
            { _id: id },
            {name, stockAmount, created_date}
        )
    },
    createOne: async ( name, stockAmount, created_date ) => {
        return await ProductModel.create({name, stockAmount, created_date})
    }

}