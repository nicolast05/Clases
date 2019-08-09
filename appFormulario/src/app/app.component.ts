import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("formulario", {static: true}) f:NgForm

 /*  registrar(f : NgForm) {
    if(f.valid) {
      console.log("valido")
    } else {
      console.log("invalido")
    }

  } */

  registrar() {
    if(this.f.valid) {
      console.log(this.f.value)
      console.log(this.f.form.getRawValue())
      console.log("valido")
      this.f.form.reset()
    } else {
      console.log("invalido")
    }
  }

  cargarData(){
    this.f.setValue({
      nombre: "nico",
      correo: "s@hh.com",
      pass: "123",
      edad: 22
    })
  }

  cargarDataParcial(){
    this.f.form.patchValue({
      nombre: "nico",
      /* correo: "s@hh.com", */
      pass: "123"
      /* edad: 22 */
    })
  }
}
