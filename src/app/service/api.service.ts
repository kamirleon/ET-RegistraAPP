import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://rickandmortyapi.com/api';
  private BASE_URL_DUMMY='https://dummyjson.com'
  constructor(private http: HttpClient) { }


  //COMIENZO DE LA API USUARIOS! 

  //Obtener todo los usuarios.
  public getAllUsers(limit:number,skip:number){
    return this.http.get(`${this.BASE_URL_DUMMY}/users?limit=${limit}&skip=${skip}`)
  }
  //Obtener Informacion  de un usuario 
  public getASingleUser(id_user:any){
    return this.http.get(`${this.BASE_URL_DUMMY}/users/${id_user}`)
  }
  //Obtener publicaciones de un usuario
  public getAllPostsByUserId(id_user:any){
    return this.http.get(`${this.BASE_URL_DUMMY}/posts/user/${id_user}`);
  }
  //Obtener comentarios de las publicaciones de un usuario. 
  public getAllCommentsByPostId(post_id:any){
    return this.http.get(`${this.BASE_URL_DUMMY}/comments/post/${post_id}`);
  }

  //Realizar Login
  public authUser(username:string,password:string){
    return this.http.post<any>(`${this.BASE_URL_DUMMY}/auth/login`,{
      username:username,
      password:password
    },{headers:{
      'Content-Type': 'application/json' 
    }});
  }

}