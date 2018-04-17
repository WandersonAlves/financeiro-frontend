import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'unidade-cadastro-view',
  templateUrl: './unidade-cadastro-view.component.html',
  styleUrls: ['./unidade-cadastro-view.component.scss']
})
export class UnidadeCadastroViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Cadastro de Unidade' });
  }

}
