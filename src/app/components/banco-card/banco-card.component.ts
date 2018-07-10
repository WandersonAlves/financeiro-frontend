import { Component, OnInit, Input } from '@angular/core';
import { IBanco } from '../../interfaces/banco.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'banco-card',
  templateUrl: './banco-card.component.html',
  styleUrls: ['./banco-card.component.scss']
})
export class BancoCardComponent implements OnInit {

  @Input() banco: IBanco = {
    codigo: 'BB',
    nome: 'Banco do Brasil',
    status: 'block'
  };

  constructor() { }

  ngOnInit() {
  }

}
