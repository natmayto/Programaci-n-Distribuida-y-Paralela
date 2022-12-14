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

        const { product, categoria, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        producto.product = producto;
        producto.categoria = categoria;
        producto.precio = precio;

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