import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCadastroViewComponent } from './aluno-cadastro-view.component';

describe('AlunoCadastroViewComponent', () => {
  let component: AlunoCadastroViewComponent;
  let fixture: ComponentFixture<AlunoCadastroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoCadastroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCadastroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
