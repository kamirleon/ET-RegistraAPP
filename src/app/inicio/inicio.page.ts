import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { ApiService } from '../service/api.service';
import { ModalController } from '@ionic/angular';
import { ComentariosPage } from '../modals/comentarios/comentarios.page';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 nombre: string ='';

  constructor( private stateService:StateService,
               private api:ApiService,
               private modalController: ModalController) { }

  mePosts:any;
  // idUser=this.stateService.getIdUsuario.subscribe((idUsuario) =>{
  //   return idUsuario;
  // })


  async abrirComentarios(idPost:any) {
    const modal = await this.modalController.create({
    component: ComentariosPage,
    componentProps: { idPost: idPost}
    });
  
    await modal.present();
  
  }

  ngOnInit() {

    this.stateService.getIdUsuario.subscribe((idUsuario) =>{
      this.api.getAllPostsByUserId(idUsuario).subscribe((res) =>{
        this.mePosts=res;
      })
    })



    this.stateService.getNombre.subscribe((nombre)=>{
      this.nombre =nombre;
    })
    this.stateService.setTitulo = 'Inicio'

  
  }

  // tarerNombre(){
  //   this.stateService.getNombre;
  // }

}
