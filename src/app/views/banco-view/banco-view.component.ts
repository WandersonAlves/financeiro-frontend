import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';
import { Router } from '@angular/router';
import { IBanco } from '../../interfaces/banco.interface';

@Component({
  selector: 'banco-view',
  templateUrl: './banco-view.component.html',
  styleUrls: ['./banco-view.component.scss']
})
export class BancoViewComponent implements OnInit {

  public bancos: IBanco[] = [
    {
      codigo: '654',
      nome: 'Banco A.J.Renner S.A.',
      status: 'unblock'
    },
    {
      codigo: 'M19',
      nome: 'Banco CNH Capital S.A.',
      status: 'unblock'
    },
    {
      codigo: '024',
      nome: 'Banco de Pernambuco S.A. - BANDEPE',
      status: 'block'
    },
    {
      codigo: '033',
      nome: 'Banco Santander (Brasil) S.A.',
      status: 'unblock'
    },
  ]

  constructor(private eventObservable: EventObservableService, private router: Router) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Listagem de Banco' });
  }

  createBanco() {
    this.router.navigate(['main/banco-cadastro']);
  }

}
