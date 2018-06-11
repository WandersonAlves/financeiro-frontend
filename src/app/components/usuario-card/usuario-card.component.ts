import { Component, OnInit, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  @Input() usuario: IUsuario = {
    name: 'Wanderson',
    unidade: 'M1',
    id: 43,
    status: 'unblock'
  };

  constructor() { }

  ngOnInit() {
  }

}
