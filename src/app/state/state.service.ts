import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private personajes:BehaviorSubject<any> = new BehaviorSubject(null);


  private isLogged:BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);
  
  getIsLogged(){
    return this.isLogged.asObservable();
  }

  setIsLogged(value:boolean){
    this.isLogged.next(value);
  }

  nombre:BehaviorSubject<string> = new BehaviorSubject('');
  titulo:BehaviorSubject<string> = new BehaviorSubject('RegistraApp');
  //nuevos campos
  idUsuario:BehaviorSubject<string> = new BehaviorSubject('');
  imgUsuario:BehaviorSubject<string> = new BehaviorSubject('https://ionicframework.com/docs/img/demos/avatar.svg');


  get getIdUsuario(){
    return this.idUsuario.asObservable();
  }

  get getImgUsuario(){
    return this.imgUsuario.asObservable();
  }

  set setIdUsuario(idUsuario:string){
    this.idUsuario.next(idUsuario);
  }

  set setImgUsuario(imgUsuario:string){
    this.imgUsuario.next(imgUsuario);
  }

  get getNombre(){
    return this.nombre.asObservable();
  }

  set setNombre(nombre:string){
    this.nombre.next(nombre);

  }

  get getTitulo(){
    return this.titulo.asObservable();
  }

  set setTitulo(titulo:string){
    this.titulo.next(titulo);
  }

  public obtenerPersonajes(){
    return this.personajes.asObservable();
  }

  public personajesValues(personajes:any){
    this.personajes.next(personajes);
  }
  constructor() { }
}
