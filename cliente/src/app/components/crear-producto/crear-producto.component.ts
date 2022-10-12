import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Listado';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _productoService: ProductoService, private aRouter: ActivatedRoute) { 
    this.productoForm = this.fb.group({
      nombre_animal: ['', Validators.required],
      raza_animal: ['', Validators.required],
      edad_animal: ['', Validators.required],
      peso_animal: ['', Validators.required],
      cedula_cliente: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      apellidos_cliente: ['', Validators.required],
      direccion_cliente: ['', Validators.required],
      telefono_cliente: ['', Validators.required],
      nombre_medicamento: ['', Validators.required],
      descripcion_medicamento: ['', Validators.required],
      dosis_medicamento: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarproducto(){

    const PRODUCTO: Producto = {
      nombre_animal: this.productoForm.get('nombre_animal')?.value,
      raza_animal: this.productoForm.get('raza_animal')?.value,
      edad_animal: this.productoForm.get('edad_animal')?.value,
      peso_animal: this.productoForm.get('peso_animal')?.value,
      cedula_cliente: this.productoForm.get('cedula_cliente')?.value,
      nombre_cliente: this.productoForm.get('nombre_cliente')?.value,
      apellidos_cliente: this.productoForm.get('apellidos_cliente')?.value,
      direccion_cliente:this.productoForm.get('direccion_cliente')?.value,
      telefono_cliente: this.productoForm.get('telefono_cliente')?.value,
      nombre_medicamento: this.productoForm.get('nombre_medicamento')?.value,
      descripcion_medicamento: this.productoForm.get('descripcion_medicamento')?.value,
      dosis_medicamento: this.productoForm.get('dosis_medicamento')?.value,
    }

    if (this.id !== null){
      //editar
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('¡Los datos fueron actualizados con éxito!', '¡Datos Actualizados!');
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.productoForm.reset();
      })

    } else {
      // agregar
      console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{

    this.toastr.success('¡Los datos fueron registrados con éxito!', '¡Datos Registrados!');
    this.router.navigate(['/']);
  }, error =>{
    console.log(error);
    this.productoForm.reset();
  })
}
    }



esEditar() {
    if(this.id !== null){
      this.titulo = "Editar Producto";
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({

      nombre_animal: data.nombre_animal,
      raza_animal: data.raza_animal,
      edad_animal: data.edad_animal,
      peso_animal: data.peso_animal,
      cedula_cliente: data.cedula_cliente,
      nombre_cliente: data.nombre_cliente,
      apellidos_cliente: data.apellidos_cliente,
      direccion_cliente: data.direccion_cliente,
      telefono_cliente: data.telefono_cliente,
      nombre_medicamento: data.nombre_medicamento,
      descripcion_medicamento: data.descripcion_medicamento,
      dosis_medicamento: data.dosis_medicamento,

        })


      })
    }
}
}
