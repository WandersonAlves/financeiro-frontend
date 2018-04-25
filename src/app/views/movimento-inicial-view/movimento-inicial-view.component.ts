import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'movimento-inicial-view',
  templateUrl: './movimento-inicial-view.component.html',
  styleUrls: ['./movimento-inicial-view.component.scss']
})
export class MovimentoInicialViewComponent implements OnInit {

  public movimentoInicialAllowed: boolean = true;
  public currStep: number = 1;

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Movimento Inicial' });
    this._checkIfAllowed();
  }

  private async _checkIfAllowed() {

  }

}
