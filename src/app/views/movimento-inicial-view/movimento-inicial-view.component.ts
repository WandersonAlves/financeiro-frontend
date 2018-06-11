import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'movimento-inicial-view',
  templateUrl: './movimento-inicial-view.component.html',
  styleUrls: ['./movimento-inicial-view.component.scss']
})
export class MovimentoInicialViewComponent implements OnInit {

  public movimentoInicialAllowed = true;
  public currStep = 1;

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Movimento Inicial' });
    this._checkIfAllowed();
  }

  private async _checkIfAllowed() {

  }

}
