export const validateName = (name) => {
    if (!name || name.trim() === "") {
        return { valid: false, message: "El nombre no puede estar vacía." };
    }
    return { valid: true, message: "Nombre válido." };
}

export const validateStockAmount = (stock) => {
    if (!stock && stock !== 0 || stock < 0) {
        return { valid: false, message: "El stock no puede estar vacío O no es un numero O debe ser >= 0" };
    }
    
    return { valid: true };
}