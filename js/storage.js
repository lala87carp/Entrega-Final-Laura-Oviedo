const KEY = "carrito"

export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito))
}

export const obtenerCarrito = (carrito) => {
    return JSON.parse(localStorage.getItem(KEY)) || []
}

// en el nombre puse storage para que no se pise con el resto
export const vaciarCarritoStorage = (carrito) => {
    localStorage.removeItem(KEY)
}