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

  private _unidades: IUnidade[] = [
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
  ];

  public unidades: IUnidade[];

  constructor(private router: Router, private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({mainRoute: 'Cadastro', childrenRoute: 'Listagem de Unidade'});
    this.unidades = this._unidades;
  }

  createUnidade() {
    this.router.navigate(['main/unidade-cadastro']);
  }

  searchUnidade(searchQuery: string) {
    if (!searchQuery) {
      this.unidades = this._unidades;
    }
    else {
      this.unidades = this._unidades.filter(unidade => {
        return unidade.name.toUpperCase().includes(searchQuery.toUpperCase());
      });
    }    
  }

}
