import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaronaAceitaPage } from './carona-aceita.page';

describe('CaronaAceitaPage', () => {
  let component: CaronaAceitaPage;
  let fixture: ComponentFixture<CaronaAceitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaronaAceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
