import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recebimentos-alunos-proprios-view',
  templateUrl: './recebimentos-alunos-proprios-view.component.html',
  styleUrls: ['./recebimentos-alunos-proprios-view.component.scss']
})
export class RecebimentosAlunosPropriosViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Recebimentos > Aluno Proprio' });
  }

}
