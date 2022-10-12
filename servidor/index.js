const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Server crear
const app = express();

//conexión a la bd
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));


app.listen(1234, () => {
    console.log("El server corre");
})