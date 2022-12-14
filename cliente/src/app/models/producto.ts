export class  Producto {
    _id?: number;
    producto: string;
    categoria: string;
    precio: number;


    constructor(producto: string, categoria:string, precio: number){
        this.producto= producto;
        this.categoria= categoria;
        this.precio= precio;

    }

}
