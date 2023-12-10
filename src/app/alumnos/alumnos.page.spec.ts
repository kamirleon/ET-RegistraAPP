import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosPage } from './alumnos.page';
import { ApiService } from '../service/api.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlumnosPage', () => {
  let component: AlumnosPage;
  let fixture: ComponentFixture<AlumnosPage>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getAllUsers']);

    TestBed.configureTestingModule({
      declarations: [AlumnosPage],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiService, useValue: spy }],
    });

    fixture = TestBed.createComponent(AlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('debe navegar a la página de detalles cuando se llama ObtenerMasInformación', () => {
  //   const navigateSpy = spyOn((component as any).router, 'navigateByUrl');

  //   component.ObtenerMasInformacion(1);

  //   expect(navigateSpy).toHaveBeenCalledWith('/detalle-alumnos/1');
  // });
});