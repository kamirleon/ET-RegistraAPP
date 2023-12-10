import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.page.html',
  styleUrls: ['./detalle-alumnos.page.scss'],
})
export class DetalleAlumnosPage implements OnInit {
  public personaje:any;

  constructor(private api:ApiService,
              private activateRoute:ActivatedRoute) { }
  public idUser=this.activateRoute.snapshot.paramMap.get('idUser');
  public userDetalle:any;

  ngOnInit() {
    this.api.getASingleUser(this.idUser).subscribe(
      (data)=>{
        this.userDetalle=data;
      }
    )

  }

}