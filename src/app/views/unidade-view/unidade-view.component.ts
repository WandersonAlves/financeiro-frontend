import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventObservableService } from '../../services/shared/observable.service';
import { IUnidade } from '../../interfaces/unidade.interface';

@Component({
  selector: 'unidade-view',
  templateUrl: './unidade-view.component.html',
  styleUrls: ['./unidade-view.component.scss']
})
export class UnidadeViewComponent implements OnInit {

  public unidades: IUnidade[] = [
    {
      date: '17/04/2018',
      name: 'M1',
      registrant: 'Wanderson',
      status: 'block'
    },
    {
      date: '17/04/2018',
      name: 'M2',
      registrant: 'Guilherme',
      status: 'unblock'
    },
    {
      date: '17/04/2018',
      name: 'M3',
      registrant: 'Rebecca',
      status: 'unblock'
    },
  ]

  constructor(private router: Router, private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({mainRoute: 'Cadastro', childrenRoute: 'Listagem de Unidade'});
  }

  createUnidade() {
    this.router.navigate(['main/unidade-cadastro']);
  }

}
