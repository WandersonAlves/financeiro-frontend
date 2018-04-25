import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoInicialViewComponent } from './movimento-inicial-view.component';

describe('MovimentoInicialViewComponent', () => {
  let component: MovimentoInicialViewComponent;
  let fixture: ComponentFixture<MovimentoInicialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentoInicialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoInicialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
