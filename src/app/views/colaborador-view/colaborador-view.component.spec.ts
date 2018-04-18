import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorViewComponent } from './colaborador-view.component';

describe('ColaboradorViewComponent', () => {
  let component: ColaboradorViewComponent;
  let fixture: ComponentFixture<ColaboradorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
