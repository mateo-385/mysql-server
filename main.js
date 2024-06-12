const express = require('express');
const cors = require('cors');
const app = express();

//Middleware
app.use(cors())
app.use(express.json())

app.use(require("./src/routes/books.routes"))

app.listen(5000, console.log("servidor iniciado"));