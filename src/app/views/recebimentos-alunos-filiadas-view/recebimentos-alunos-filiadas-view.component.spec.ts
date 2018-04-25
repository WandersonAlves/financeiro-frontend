import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosAlunosFiliadasViewComponent } from './recebimentos-alunos-filiadas-view.component';

describe('RecebimentosAlunosFiliadasViewComponent', () => {
  let component: RecebimentosAlunosFiliadasViewComponent;
  let fixture: ComponentFixture<RecebimentosAlunosFiliadasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebimentosAlunosFiliadasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebimentosAlunosFiliadasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
