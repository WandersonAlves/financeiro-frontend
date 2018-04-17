import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCadastroViewComponent } from './banco-cadastro-view.component';

describe('BancoCadastroViewComponent', () => {
  let component: BancoCadastroViewComponent;
  let fixture: ComponentFixture<BancoCadastroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoCadastroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoCadastroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
