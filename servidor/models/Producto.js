const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre_animal: {
        type: String,
        required: true
    },
    raza_animal: {
        type: String,
        required: true
    },
    edad_animal: {
        type: Number,
        required: true
    },
    peso_animal: {
        type: Number,
        required: true
    },
    cedula_cliente: {
        type: Number,
        required: true
    },
    nombre_cliente: {
        type: String,
        required: true
    },
    apellidos_cliente: {
        type: String,
        required: true
    },
    direccion_cliente: {
        type: String,
        required: true
    },
    telefono_cliente: {
        type: Number,
        required: true
    },
    nombre_medicamento: {
        type: String,
        required: true
    },
    descripcion_medicamento: {
        type: String,
        required: true
    },
    dosis_medicamento: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Producto', ProductoSchema);
