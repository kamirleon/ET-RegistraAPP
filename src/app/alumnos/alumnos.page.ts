import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  //public characters: any;
  public users:any;

  constructor(private rmService: ApiService, private router:Router,
               private activateRoute:ActivatedRoute) { }

               
  skip=this.activateRoute.snapshot.paramMap.get('skip') || '0'; // se Agrega el || (OR) para asegurar que el tipo siempre sea string.
  limit=this.activateRoute.snapshot.paramMap.get('limit') || '0'; //se Agrega el || (OR) para asegurar que el tipo siempre sea string.

  ngOnInit(): void {
    // this.rmService.getCharacters().subscribe(
    //   (data)=> {
    //     this.characters = data;
    //     localStorage.setItem('characters', JSON.stringify(data));
    //     console.log(data);
    //   }
    // )
    this.rmService.getAllUsers(parseInt(this.skip),parseInt(this.limit)).subscribe(
      (data)=>{
        this.users= data;
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data);
      }
    )
  }

  ObtenerMasInformacion(id_user:number){
    this.router.navigateByUrl('/detalle-alumnos/'+id_user);
  }

  // detalle(personaje: any){
  //   console.log(personaje);
  //   localStorage.setItem('characters',JSON.stringify(personaje));
  //   this.router.navigateByUrl('/detalle-alumnos');
  // }

}