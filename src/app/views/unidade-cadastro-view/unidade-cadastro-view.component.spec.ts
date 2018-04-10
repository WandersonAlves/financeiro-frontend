import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeCadastroViewComponent } from './unidade-cadastro-view.component';

describe('UnidadeCadastroViewComponent', () => {
  let component: UnidadeCadastroViewComponent;
  let fixture: ComponentFixture<UnidadeCadastroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeCadastroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeCadastroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
