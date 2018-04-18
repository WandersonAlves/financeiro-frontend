import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../../components/dialog-alert/dialog-alert.component';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'colaborador-cadastro-view',
  templateUrl: './colaborador-cadastro-view.component.html',
  styleUrls: ['./colaborador-cadastro-view.component.scss']
})
export class ColaboradorCadastroViewComponent implements OnInit {

  constructor(private dialog: MatDialog, private eventObservable: EventObservableService) { }

  ngOnInit() {
    this.eventObservable.emitRouteChange({ mainRoute: 'Cadastro', childrenRoute: 'Cadastro de Colaborador' });
  }
  openConfirm() {
    this.dialog.open(DialogAlertComponent, {
      data: "Aluno cadastrado com sucesso!"
    });
  }

}
