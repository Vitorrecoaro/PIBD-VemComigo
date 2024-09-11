import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarVeiculoPage } from './cadastrar-veiculo.page';

describe('CadastrarVeiculoPage', () => {
  let component: CadastrarVeiculoPage;
  let fixture: ComponentFixture<CadastrarVeiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
