const { Router } = require("express")
const { } = require("./src/controllers/books.controller")
const router = Router()

//Obtener todos los libros
router.get("/books",)

//Obtener libro por id
router.get("/books/:id",)

//Crear un libro
router.post("/books",)

//Actualizar un libro por id
router.put("/books/:id",)

//Eliminar un libro
router.delete("/books/:id",)

module.exports = router;

