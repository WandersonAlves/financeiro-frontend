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

  private _bancos: IBanco[] = [
    {
      codigo: '001',
      nome: 'Banco do Brasil S.A.',
      status: 'unblock'
    },
    {
      codigo: '341',
      nome: 'Banco Itaú S.A.',
      status: 'unblock'
    },
    {
      codigo: '356',
      nome: 'Banco Real S.A. (antigo)',
      status: 'block'
    },
    {
      codigo: '033',
      nome: 'Banco Santander (Brasil) S.A.',
      status: 'unblock'
    },
    {
      codigo: '652',
      nome: 'Itaú Unibanco Holding S.A.',
      status: 'unblock'
    },
    {
      codigo: '237',
      nome: 'Banco Bradesco S.A.',
      status: 'unblock'
    },
    {
      codigo: '745',
      nome: 'Banco Citibank S.A.',
      status: 'unblock'
    },
    {
      codigo: '399',
      nome: 'HSBC Bank Brasil S.A. – Banco Múltiplo',
      status: 'unblock'
    },
  ]

  public bancos: IBanco[];

  constructor(private eventObservable: EventObservableService, private router: Router) { }

  ngOnInit() {
    this.bancos = this._bancos;
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Listagem de Banco' });
  }

  createBanco() {
    this.router.navigate(['main/banco-cadastro']);
  }

  searchBanco(searchQuery: string) {
    if (!searchQuery) {
      this.bancos = this._bancos;
    }
    else {
      this.bancos = this._bancos.filter(banco => {
        return banco.nome.toUpperCase().includes(searchQuery.toUpperCase());
      });
    }
  }

}
