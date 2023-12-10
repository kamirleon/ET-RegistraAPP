import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { StateService } from '../state/state.service';
import { BehaviorSubject } from 'rxjs';

// Mock StateService
class MockStateService {
  private nombreSubject = new BehaviorSubject<string>('Juan');
  nombre = this.nombreSubject.asObservable();
  setTitulo = jasmine.createSpy('setTitulo');
}

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioPage],
      providers: [
        { provide: StateService, useClass: MockStateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('debería establecer el título al inicializar', () => {
  //   // El título se establece en ngOnInit, que se llama con fixture.detectChanges()
  //   expect(stateService.setTitulo).toHaveBeenCalledWith('Inicio');
  // });

  // it('debería actualizar el nombre desde el StateService', () => {
  //   expect(component.nombre).toEqual('Juan'); // Verifica que el nombre se ha establecido en el valor inicial del BehaviorSubject
  //   // Para probar con un nuevo valor, puedes hacer:
  //   // stateService.nombreSubject.next('Ana');
  //   // fixture.detectChanges();
  //   // expect(component.nombre).toEqual('Ana');
  // });

  // it('debería tener un método para obtener el nombre', () => {
  //   spyOn(stateService, 'getNombre').and.callThrough();
  //   component.tarerNombre();
  //   expect(stateService.getNombre).toHaveBeenCalled();
  // });

  
});
