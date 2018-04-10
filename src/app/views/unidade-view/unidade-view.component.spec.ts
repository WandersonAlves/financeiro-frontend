import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeViewComponent } from './unidade-view.component';

describe('UnidadeViewComponent', () => {
  let component: UnidadeViewComponent;
  let fixture: ComponentFixture<UnidadeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
