import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'unidade-view',
  templateUrl: './unidade-view.component.html',
  styleUrls: ['./unidade-view.component.scss']
})
export class UnidadeViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createUnidade() {
    this.router.navigate(['main/unidade-cadastro']);
  }

}
