
const { newConnection } = require('./db')

//Obtener todos los libros
const obtenerLibros = async (request, response) => {
    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM books")
    response.status(200).json(result[0])
    connection.end()
}

//Obtener libro por id
const obtenerLibroId = async (request, response) => {
    const connection = await newConnection()
    const id = request.params.id
    const result = await connection.query(`SELECT * FROM books WHERE id = ?`, id)
    response.status(200).json(result[0])
    connection.end()
}

//Crear libro
const crearLibro = async (request, response) => {
    console.log(request.body);
    const connection = await newConnection()
    const { name, author } = request.body
    await connection.query(`INSERT INTO books (name, author) VALUES (?,?)`, [name, author])
    response.send("Libro creado correctamente")
    connection.end()
}

//Actualizar libro
const actualizarLibro = async (request, response) => {
    const connection = await newConnection()
    const id = request.params.id
    const { name, author } = request.body
    await connection.query(`UPDATE books SET name =?, author =? WHERE id =?`, [name, author, id])
    response.send("Libro actualizado correctamente")
    connection.end()
}

//Eliminar libro
const eliminarLibro = async (request, response) => {
    const connection = await newConnection()
    const id = request.params.id
    await connection.query(`DELETE FROM books WHERE id = ?`, id)
    response.send("Libro eliminado correctamente")
    connection.end()
}

module.exports = {
    obtenerLibros, obtenerLibroId, actualizarLibro, eliminarLibro
}