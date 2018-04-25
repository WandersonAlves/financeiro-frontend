import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'recebimentos-alunos-filiadas-view',
  templateUrl: './recebimentos-alunos-filiadas-view.component.html',
  styleUrls: ['./recebimentos-alunos-filiadas-view.component.scss']
})
export class RecebimentosAlunosFiliadasViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Recebimentos > Aluno Filiado' });
  }

}
