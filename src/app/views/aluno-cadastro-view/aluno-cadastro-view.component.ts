import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../../components/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-aluno-cadastro-view',
  templateUrl: './aluno-cadastro-view.component.html',
  styleUrls: ['./aluno-cadastro-view.component.scss']
})
export class AlunoCadastroViewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openConfirm() {
    this.dialog.open(DialogAlertComponent, {
      data: "Aluno cadastrado com sucesso!"
    });
  }

}
