import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';
import { IUsuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'usuario-view',
  templateUrl: './usuario-view.component.html',
  styleUrls: ['./usuario-view.component.scss']
})
export class UsuarioViewComponent implements OnInit {

  public usuarios: IUsuario[] = [
    {
      id: 1,
      name: 'Wanderson Alves',
      status: 'block',
      unidade: 'M1'
    },
    {
      id: 2,
      name: 'Guilherme Leão',
      status: 'unblock',
      unidade: 'M1'
    },
  ]

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Listagem de Usuario' });
  }

}
