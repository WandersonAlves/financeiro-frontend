import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoViewComponent } from './banco-view.component';

describe('BancoViewComponent', () => {
  let component: BancoViewComponent;
  let fixture: ComponentFixture<BancoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
