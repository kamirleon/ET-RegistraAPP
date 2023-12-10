import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RecuperarContrasenaPage } from './recuperar-contrasena.page';

describe('RecuperarContrasenaPage', () => {
  let component: RecuperarContrasenaPage;
  let fixture: ComponentFixture<RecuperarContrasenaPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RecuperarContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
