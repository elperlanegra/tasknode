const express = require('express');
const router = require('./routers');

//crear la aplicación express
const app = express();

//rutas 
app.use('/', router()); 

app.listen(9999)