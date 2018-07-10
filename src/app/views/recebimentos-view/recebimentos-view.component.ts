import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recebimentos-view',
  templateUrl: './recebimentos-view.component.html',
  styleUrls: ['./recebimentos-view.component.scss']
})
export class RecebimentosViewComponent implements OnInit {

  public selectedRecebimento: string;

  constructor(private eventObservable: EventObservableService, private router: Router) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Recebimentos' });
  }

  changeRoute() {
    switch (this.selectedRecebimento) {
      case '1': {
        this.router.navigate(['main/recebimentos/aluno-proprio']);
        break;
      }
      case '2': {
        this.router.navigate(['main/recebimentos/aluno-filiado']);
        break;
      }
      case '3': {
        this.router.navigate(['main/recebimentos/diversos']);
        break;
      }
      default: this.router.navigate(['main/recebimentos']);
    }
  }

}
