import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DetalleAlumnosPage } from './detalle-alumnos.page';

describe('DetalleAlumnosPage', () => {
  let component: DetalleAlumnosPage;
  let fixture: ComponentFixture<DetalleAlumnosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DetalleAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
