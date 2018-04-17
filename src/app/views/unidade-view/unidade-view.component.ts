import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'unidade-view',
  templateUrl: './unidade-view.component.html',
  styleUrls: ['./unidade-view.component.scss']
})
export class UnidadeViewComponent implements OnInit {

  constructor(private router: Router, private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({mainRoute: 'Cadastro', childrenRoute: 'Listagem de Unidade'});
  }

  createUnidade() {
    this.router.navigate(['main/unidade-cadastro']);
  }

}
