const express = require('express');
const routes  = require('./routes');

//crear la aplicación express
const app = express();

//rutas 
app.use('/', routes()); 

app.listen(3000);