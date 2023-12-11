import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { AlertController, ModalController } from '@ionic/angular';
import { RecuperaClavePage } from '../modals/recupera-clave/recupera-clave.page';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
              private stateService: StateService,
              private alertController: AlertController,
              private modalController: ModalController,
              private api:ApiService) {

    this.formulariologin = this.fb.group({
      nombre: [''],
      contrasena: [''],

    })


  }

  ionViewDidEnter(){ //se utiliza para asegurarnos de que se pueda ejecutar pese al inicio del sitio con ngInit.
    this.stateService.setTitulo = 'Iniciar sesión'
  }

  ngOnInit() { //en este ciclo de vida es cuando el sitio inicia.
    this.stateService.setTitulo = 'Iniciar sesión'

  }

  login() {
    this.stateService.setIsLogged(true);
  }

  async mostrarAlerta(cabecera:string,mensaje:string,boton='OK'){
  const alert = await this.alertController.create({
    header: cabecera,
    message: mensaje,
    buttons: [boton]
    });
    await alert.present();
  }

  async ingresar() {
    const alumno = {
      nombre: this.formulariologin.get('nombre')?.value,
      contrasena: this.formulariologin.get('contrasena')?.value,
    };
    this.api.authUser(alumno.nombre,alumno.contrasena).subscribe((data)=>{
      //seteamos las propiedades principales.
       this.stateService.setNombre=data.firstName;
       this.stateService.setIdUsuario=data.id;
       this.stateService.setImgUsuario=data.image;
       this.login();
       this.router.navigate(['/inicio']);
       this.formulariologin.reset();

    },error =>{
      console.log("POST llamada por error", error);
      if(error.error.message == 'Invalid credentials'){
        //  alert(`Credenciales invalidas, intente nuevamente.`);
        this.mostrarAlerta('Ups','Las credenciales que nos envías son invalidas, intenta nuevamente','entendido')
        this.formulariologin.reset();
      }
    },() => {
      console.log("La POST observable ahora se ha completado");
    });

    // this.stateService.setNombre = alumno.nombre; // suponiendo que setNombre es un setter o método en tu servicio

    // if (alumno.nombre == '' || alumno.contrasena == '') {
    //   const alert = await this.alertController.create({
    //     header: 'Error',
    //     message: 'Debes ingresar todos los datos',
    //     buttons: ['OK']
    //   });

    //   await alert.present();

    // } else {
    //   this.login(); // ¡Esto marca al usuario como logueado!

    //   const successAlert = await this.alertController.create({
    //     header: '¡Ingreso exitoso!',
    //     message: 'Gracias por registrar tu asistencia',
    //     buttons: [{
    //       text: 'Continuar',
    //       handler: () => {
    //         this.router.navigate(['/inicio']);
    //       }
    //     }]
    //   });

    //   await successAlert.present();
    // }
  }




  async recuperar() {
    //this.router.navigate(['/recuperar-contrasena'])
    const modal = await this.modalController.create({
      component: RecuperaClavePage
      });
      await modal.present();

  }


}
