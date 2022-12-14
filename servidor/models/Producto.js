const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    producto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
  
});

module.exports = mongoose.model('Producto', ProductoSchema);
