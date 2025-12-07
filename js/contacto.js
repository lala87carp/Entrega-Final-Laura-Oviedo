import { obtenerCarrito } from "../js/storage.js";
import { actualizarContador } from "../js/ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito ();
    actualizarContador(carrito);
});