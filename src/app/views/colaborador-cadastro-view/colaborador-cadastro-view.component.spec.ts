import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorCadastroViewComponent } from './colaborador-cadastro-view.component';

describe('ColaboradorCadastroViewComponent', () => {
  let component: ColaboradorCadastroViewComponent;
  let fixture: ComponentFixture<ColaboradorCadastroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorCadastroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorCadastroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
