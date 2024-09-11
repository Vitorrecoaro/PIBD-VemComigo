import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaronasDisponiveisPage } from './caronas-disponiveis.page';

describe('CaronasDisponiveisPage', () => {
  let component: CaronasDisponiveisPage;
  let fixture: ComponentFixture<CaronasDisponiveisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaronasDisponiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
