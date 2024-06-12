const { Router } = require("express");
const {
    obtenerLibros,
    obtenerLibroId,
    crearLibro,
    actualizarLibro,
    eliminarLibro,
} = require("../controllers/books.controller");
const router = Router();

//Obtener todos los libros
router.get("/books", obtenerLibros);

//Obtener libro por id
router.get("/books/:id", obtenerLibroId);

//Crear un libro
router.post("/books", crearLibro);

//Actualizar un libro
router.put("/books/:id", actualizarLibro);

//Eliminar un libro
router.delete("/books/:id", eliminarLibro);

module.exports = router;
