import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'colaborador-view',
  templateUrl: './colaborador-view.component.html',
  styleUrls: ['./colaborador-view.component.scss']
})
export class ColaboradorViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService, private router: Router) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Listagem de Colaborador' });
  }

  createColaborador(): void {
    this.router.navigate(['main/colaborador-cadastro']);
  }

}
