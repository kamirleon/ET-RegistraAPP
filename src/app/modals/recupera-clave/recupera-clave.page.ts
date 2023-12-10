import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recupera-clave',
  templateUrl: './recupera-clave.page.html',
  styleUrls: ['./recupera-clave.page.scss'],
})
export class RecuperaClavePage implements OnInit {
  formulariorecuperar: FormGroup;
  
  constructor(private modalController: ModalController,
    private fb: FormBuilder, private router:Router,
    private alertController: AlertController) {
      this.formulariorecuperar = this.fb.group({
        nombre: [''],
  
      })
     }

  async cerrar(){
    await this.modalController.dismiss();
  }

  async mostrarAlerta(cabeza:string,subtitulo:string,mensaje:string,boton='Entendido') {
    const alert = await this.alertController.create({
      header: cabeza,
      subHeader: subtitulo,
      message: mensaje,
      buttons: [boton]
    });
  
    await alert.present();
  }

  volverLogin(){
    const alumno = {
      nombre: this.formulariorecuperar.get('nombre')?.value,
    };

    if (alumno.nombre == '') {
      this.mostrarAlerta('Importante','','Recuerda llenar todo los campos solicitados.');
    } else {
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
  }

}
