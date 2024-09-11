import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliarCaronaPage } from './avaliar-carona.page';

describe('AvaliarCaronaPage', () => {
  let component: AvaliarCaronaPage;
  let fixture: ComponentFixture<AvaliarCaronaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarCaronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
