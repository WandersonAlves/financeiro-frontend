import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.scss']
})
export class UsuarioViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Listagem de Usuario' });
  }

}
