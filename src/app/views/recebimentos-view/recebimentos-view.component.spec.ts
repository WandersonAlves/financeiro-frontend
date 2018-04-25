import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosViewComponent } from './recebimentos-view.component';

describe('RecebimentosViewComponent', () => {
  let component: RecebimentosViewComponent;
  let fixture: ComponentFixture<RecebimentosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebimentosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebimentosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
