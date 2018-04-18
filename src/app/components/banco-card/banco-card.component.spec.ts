import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoCardComponent } from './banco-card.component';

describe('BancoCardComponent', () => {
  let component: BancoCardComponent;
  let fixture: ComponentFixture<BancoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
