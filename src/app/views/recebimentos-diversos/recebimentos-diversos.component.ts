import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'app-recebimentos-diversos',
  templateUrl: './recebimentos-diversos.component.html',
  styleUrls: ['./recebimentos-diversos.component.scss']
})
export class RecebimentosDiversosComponent implements OnInit {

  constructor(private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'CRECEP', childrenRoute: 'Recebimentos > Diversos' });
  }

}
