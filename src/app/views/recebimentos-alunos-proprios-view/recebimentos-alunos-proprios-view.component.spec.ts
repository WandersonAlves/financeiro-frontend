import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentosAlunosPropriosViewComponent } from './recebimentos-alunos-proprios-view.component';

describe('RecebimentosAlunosPropriosViewComponent', () => {
  let component: RecebimentosAlunosPropriosViewComponent;
  let fixture: ComponentFixture<RecebimentosAlunosPropriosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebimentosAlunosPropriosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebimentosAlunosPropriosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
