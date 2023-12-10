import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  constructor(private modalController: ModalController,
              private navparams:NavParams,
              private api:ApiService) { }

  idPost=this.navparams.get('idPost');
  comentarios:any;

   async cerrar(){
    this.modalController.dismiss();
   }

  ngOnInit() {
    this.api.getAllCommentsByPostId(this.idPost).subscribe((res) =>{
      this.comentarios=res;
    });
  }

}
