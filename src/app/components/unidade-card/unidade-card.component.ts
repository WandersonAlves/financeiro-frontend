import { Component, OnInit, Input } from '@angular/core';
import { IUnidade } from '../../interfaces/unidade.interface';

@Component({
  selector: 'unidade-card',
  templateUrl: './unidade-card.component.html',
  styleUrls: ['./unidade-card.component.scss']
})
export class UnidadeCardComponent implements OnInit {

  @Input() unidade: IUnidade = {
    date: '25/10/1991',
    name: 'M6',
    registrant: 'Popoto',
    status: 'unblock'
  };

  constructor() { }

  ngOnInit() {
  }

}
