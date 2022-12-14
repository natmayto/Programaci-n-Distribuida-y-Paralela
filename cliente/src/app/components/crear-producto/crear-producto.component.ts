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
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarproducto(){

    const PRODUCTO: Producto = {
      producto: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      precio: this.productoForm.get('precio')?.value,

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

      producto: data.producto,
      categoria: data.categoria,
      precio: data.precio,

        })


      })
    }
}
}
