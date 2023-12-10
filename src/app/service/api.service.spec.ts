import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
  });

  // Prueba para obtener todos los usuarios
  it('debería obtener los usuarios en la función public getAllUsers()', (done: DoneFn) => {
    service.getAllUsers(30,10).subscribe({
      next: (users) => {
        console.log(users); 
        expect(users).toBeTruthy(); 
        expect(Array.isArray(users)).toBe(true); 
        done(); 
      },
      error: (error) => {
        done.fail('La llamada a la API falló con error: ' + error); 
      }
    });
  });

  // ... otras pruebas
});
