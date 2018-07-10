import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCadastroViewComponent } from './usuario-cadastro-view.component';

describe('UsuarioCadastroViewComponent', () => {
  let component: UsuarioCadastroViewComponent;
  let fixture: ComponentFixture<UsuarioCadastroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCadastroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCadastroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
