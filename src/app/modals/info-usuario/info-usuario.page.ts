import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {

  constructor(private modalController: ModalController,
              private navparams:NavParams,
              private api:ApiService) { }

  idUsuario=this.navparams.get('id');
  userDetalle:any;

  async cerrar(){
    await this.modalController.dismiss();
  }

  ngOnInit() {
    this.api.getASingleUser(this.idUsuario).subscribe(
      (data)=>{
        this.userDetalle=data;
      }
    )

  }

}
