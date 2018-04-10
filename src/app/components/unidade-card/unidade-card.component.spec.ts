import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeCardComponent } from './unidade-card.component';

describe('UnidadeCardComponent', () => {
  let component: UnidadeCardComponent;
  let fixture: ComponentFixture<UnidadeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
