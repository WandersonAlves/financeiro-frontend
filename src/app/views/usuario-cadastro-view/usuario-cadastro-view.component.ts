import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'usuario-cadastro-view',
  templateUrl: './usuario-cadastro-view.component.html',
  styleUrls: ['./usuario-cadastro-view.component.scss']
})
export class UsuarioCadastroViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Cadastro de Usuario' });
  }

}
