const express = require("express");
const routes = require("./routes");
const path = require("path");



//crear la aplicación express
const app = express();

// Habilitar pug
app.set("view engine", "pug");

// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

//rutas
app.use("/", routes());

app.listen(3000);
console.log("Servidor en linea en http://localhost:3000");
