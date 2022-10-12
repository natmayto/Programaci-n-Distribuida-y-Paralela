export class  Producto {
    _id?: number;
    nombre_animal: string;
    raza_animal: string;
    edad_animal: number;
    peso_animal: number;
    cedula_cliente: number;
    nombre_cliente: string;
    apellidos_cliente: string;
    direccion_cliente: string;
    telefono_cliente: number;
    nombre_medicamento: string;
    descripcion_medicamento: string
    dosis_medicamento: number;

    constructor(nombre_animal: string, raza_animal:string, edad_animal: number, peso_animal: number, cedula_cliente: number,
        nombre_cliente: string, apellidos_cliente: string, direccion_cliente: string, telefono_cliente: number, nombre_medicamento: string,
        descripcion_medicamento: string, dosis_medicamento: number){
        this.nombre_animal= nombre_animal;
        this.raza_animal= raza_animal;
        this.edad_animal= edad_animal;
        this.peso_animal= peso_animal;
        this.cedula_cliente= cedula_cliente;
        this.nombre_cliente= nombre_cliente;
        this.apellidos_cliente= apellidos_cliente;
        this.direccion_cliente= direccion_cliente;
        this.telefono_cliente= telefono_cliente;
        this.nombre_medicamento= nombre_medicamento;
        this.descripcion_medicamento= descripcion_medicamento;
        this.dosis_medicamento= dosis_medicamento;
    }

}