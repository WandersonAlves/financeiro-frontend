import { Component, OnInit } from '@angular/core';
import { EventObservableService } from '../../services/shared/observable.service';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../../components/dialog-alert/dialog-alert.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'unidade-cadastro-view',
  templateUrl: './unidade-cadastro-view.component.html',
  styleUrls: ['./unidade-cadastro-view.component.scss']
})
export class UnidadeCadastroViewComponent implements OnInit {

  constructor(private eventObservable: EventObservableService, private dialog: MatDialog) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Cadastro de Unidade' });
  }

  openConfirm() {
    this.dialog.open(DialogAlertComponent, {
      data: 'Unidade cadastrada com sucesso!'
    });
  }

}
