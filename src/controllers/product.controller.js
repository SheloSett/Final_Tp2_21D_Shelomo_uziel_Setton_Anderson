import { validateName, validateStockAmount } from "../utils/validators.model.js";
import { ProductRepository } from "../repository/product.repositoryMongo.js"

export const ProductController = {
    // Primero los metodos sin Auth

    createProduct: async (req, resp) => {
        try {
            const {name, stockAmount, created_date} = req.body;
            const { valid: validName } = validateName(name)
            const { valid: validStock } = validateStockAmount(stockAmount)
            console.log("GOOOOOOOOOOOOOOOOOOOOOOOO")
            
            const validacionGeneral = validName && validStock
            console.log({validName, validStock})
            if (!validacionGeneral) {
                
                return resp.status(422).json({  
                    message: "No esta validado el valor de Nombre o de Stock"
                });
                
            }
            
            const product = await ProductRepository.createOne(name, stockAmount, created_date);
            console.log({name, stockAmount, created_date})

            resp.json({
                statusCode:201,
                ok: true,
                payload: product
            }
            )
        }
        catch(error){
            console.log("Hubo un error en la creacion del producto", error)
            resp.status(400).json(
                {error: error}
            )
        }
    },

    getAllProducts: async (req, resp) => {
        try {
            const products = await ProductRepository.getAll();

            resp.json(
            { 
                statusCode:200,
                ok: true,
                payload: products
            }
            )
        }
        catch(error){
            console.log("error al obtener los productos")
            resp.status(500).json(
                {error: error}
            )
        }
    },

    getProductById: async (req, resp) => {
        try {
            const {id} = req.params
            const product = await ProductRepository.getOne(id);

            if (!product) {
				return resp.status(404).json({ error: "Producto no encontrado" });
			}
           
            resp.json(
                {
                    code: 200, //(este) -> (leer el comentario de abajo)
                    ok:true,
                    payload: product
                }
            )
        }
        catch(error){
            console.log("error al obtener el producto", error.message)
            resp.status(400).json( // no se si el error 404 iba aca, o era en vez del 200 (el de arriba), es decir uno o el otro
                {error: error}
            )
        }
    },

    // Con Auth

    updateById: async (req, resp) => {
		try {
			const  {name, stockAmount, created_date } = req.body;
            const { id } = req.params;

			if (!id) {
				return resp.status(400).json({ error: "El ID del producto es obligatorio" });
			}

            if (name && stockAmount){
                const { valid: validName } = validateName(name)
                const { valid: validStock } = validateStockAmount(stockAmount)
                const validacionGeneral = validName && validStock
                
                if (!validacionGeneral) {
                    
                    return resp.status(422).json({  
                        message: "No esta validado el valor de Nombre o de Stock"
                    });
                    
                }
                console.log({validName, validStock})
            } else if (stockAmount) {
                const { valid: validStock } = validateStockAmount(stockAmount)
                if (!validStock && stockAmount >= 1) {
                    return resp.status(422).json({  
                        message: "No esta validado el valor del Stock"
                    });
                }
            } else if (!name) {
                const { valid: validName } = validateName(name)
                if (!validName) {
                    return resp.status(422).json({  
                        message: "No esta validado el valor del Stock"
                    });
                }
            }

            console.log("GOOOOOOOOOOOOOOOOOOOOOOOO")
            



			await ProductRepository.updateOne(id, {
                name,
                stockAmount,
                created_date
			});

			resp.status(200).json({
				message: "Producto actualizado correctamente",
				stock: stockAmount,
			});
		} catch (error) {
			console.error("Error al actualizar producto:", error.message);
			resp.status(500).json({ error: "Error interno del servidor" });
		}
	},

    deleteById: async (req, resp) => {
		try {
			const { id } = req.params;

			const deleted = await ProductRepository.deleteOne(id);

			resp.status(200).json({
				message: "Producto eliminado correctamente",
				payload: deleted,
			});
		} catch (error) {
			console.error("Error al eliminar producto:", error.message);
			resp.status(500).json({ error: "Error interno del servidor" });
		}
	},

}