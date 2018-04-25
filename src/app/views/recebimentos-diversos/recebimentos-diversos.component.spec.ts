import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosDiversosComponent } from './recebimentos-diversos.component';

describe('RecebimentosDiversosComponent', () => {
  let component: RecebimentosDiversosComponent;
  let fixture: ComponentFixture<RecebimentosDiversosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebimentosDiversosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebimentosDiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
