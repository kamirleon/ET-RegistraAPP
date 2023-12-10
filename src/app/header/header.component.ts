import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoUsuarioPage } from '../modals/info-usuario/info-usuario.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  
  @Input()
  isHomePage: boolean = false;


  titulo: string='';
  nombre: string ='';
  idUsuario: string ='';
  imgUsuario: string ='';
  constructor(private stateService:StateService,
              private router:Router,
              private modalController: ModalController) { }

  async infoUsuario() {
    const modal = await this.modalController.create({
    component: InfoUsuarioPage,
    componentProps: { id: this.idUsuario }
    });
  
    await modal.present();
  
  }


  ngOnInit() {

    this.stateService.getTitulo.subscribe((titulo)=>{
      this.titulo = titulo;
    })
    this.stateService.getNombre.subscribe((nombre)=>{
      this.nombre =nombre;
    })
    this.stateService.getIdUsuario.subscribe((idUsuario)=>{
      this.idUsuario=idUsuario;
    });
    this.stateService.getImgUsuario.subscribe((imgUsuario) =>{
      this.imgUsuario=imgUsuario;
    });

  }

  cerrarSesion(){
    this.router.navigate(['login']);
  }

}
