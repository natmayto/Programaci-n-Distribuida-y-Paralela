const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {
    
    try{
        let producto;

        //creamos
        producto = new Producto(req.body);

       await producto.save();
       res.send(producto);

    } catch (error){
        console.log(error);
        res.status(500).send('error');
    }
}

exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR');
    }

}

exports.actualizarProducto = async (req, res) => {

    try{

        const { nombre_animal, raza_animal, edad_animal, peso_animal, cedula_cliente, nombre_cliente, apellidos_cliente, direccion_cliente, telefono_cliente, nombre_medicamento, descripcion_medicamento, dosis_medicamento } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.nombre_animal = nombre_animal;
        producto.raza_animal = raza_animal;
        producto.edad_animal = edad_animal;
        producto.peso_animal = peso_animal;
        producto.cedula_cliente = cedula_cliente;
        producto.nombre_cliente = nombre_cliente;
        producto.apellidos_cliente = apellidos_cliente;
        producto.direccion_cliente = direccion_cliente;
        producto.telefono_cliente = telefono_cliente;
        producto.nombre_medicamento = nombre_medicamento;
        producto.descripcion_medicamento = descripcion_medicamento;
        producto.dosis_medicamento = dosis_medicamento;

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id },producto, { new: true })
        res.json(producto);

    } catch (error){
        console.log(error);
        res.status(500).send('Error al actualizar');
    }
}

exports.obtenerProducto = async (req, res) => {

    try{

         let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto);

    } catch (error){
        console.log(error);
        res.status(500).send('Error al obtener datos');
    }
}

exports.eliminarProducto = async (req, res) => {

    try{

         let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Producto eliminado'});

    } catch (error){
        console.log(error);
        res.status(500).send('Error al obtener datos');
    }
}