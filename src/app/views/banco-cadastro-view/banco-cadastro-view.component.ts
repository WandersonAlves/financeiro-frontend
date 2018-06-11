import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'banco-cadastro-view',
  templateUrl: './banco-cadastro-view.component.html',
  styleUrls: ['./banco-cadastro-view.component.scss']
})
export class BancoCadastroViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Cadastro de Banco' });
  }

}
