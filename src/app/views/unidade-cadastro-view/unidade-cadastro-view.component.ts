import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../../components/dialog-alert/dialog-alert.component';

@Component({
  selector: 'unidade-cadastro-view',
  templateUrl: './unidade-cadastro-view.component.html',
  styleUrls: ['./unidade-cadastro-view.component.scss']
})
export class UnidadeCadastroViewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openConfirm() {
    this.dialog.open(DialogAlertComponent, {
      data: "Unidade cadastrada com sucesso!"
    });
  }

}
