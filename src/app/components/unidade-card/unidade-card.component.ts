import { Component, OnInit, Input } from '@angular/core';
import { IUnidade } from '../../interfaces/unidade.interface';

@Component({
  selector: 'unidade-card',
  templateUrl: './unidade-card.component.html',
  styleUrls: ['./unidade-card.component.scss']
})
export class UnidadeCardComponent implements OnInit {

  @Input() unidade: IUnidade = {
    date: '07/04/2018',
    name: 'M1',
    registrant: 'Wanderson',
    status: 'unblock'
  };

  constructor() { }

  ngOnInit() {
  }

}
