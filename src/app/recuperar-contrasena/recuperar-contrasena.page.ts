import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  
  formulariorecuperar: FormGroup;

  

  constructor(private router: Router, private fb: FormBuilder, private stateService: StateService) {

    this.formulariorecuperar = this.fb.group({
      nombre: [''],

    })

   }

  ngOnInit() {
    this.stateService.setTitulo = 'Recuperar contraseña'

  }

  volverLogin(){
    const alumno = {
      nombre: this.formulariorecuperar.get('nombre')?.value,
    };

    if (alumno.nombre == '') {
      alert('Debes ingresar todos los datos')
    } else {
      this.router.navigate(['/login'])
    }
  }

}
