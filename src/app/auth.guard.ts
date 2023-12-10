import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private stateService: StateService, private router: Router) {}

  canActivate():boolean{
    let isLogged:boolean = false;
    this.stateService.getIsLogged().subscribe((value)=>{
     
      isLogged=value;
      if(!value){
        this.router.navigateByUrl('/login');
      }
    });
    return isLogged;
    
  }
  
}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//       const nombre = this.stateService.getNombre;
//       if (nombre) {
//         return true;
//       } else {
//         this.router.navigate(['/login']);
//         return false;
//       }
//   }
// }
