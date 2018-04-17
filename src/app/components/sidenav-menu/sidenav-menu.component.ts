import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  public menuItems: Array<IMenuItem> = [
    {
      title: 'cadastros',
      isOpen: false,
      children: [
        {
          title: 'Unidade',
          routerLink: 'unidade'
        },
        {
          title: 'Usuario',
          routerLink: 'usuario'
        },
        {
          title: 'Bancos',
          routerLink: null
        },
        {
          title: 'Aluno Próprio',
          routerLink: null
        },
      ]
    },
    {
      title: 'CRECEp',
      isOpen: false,
      children: [
        {
          title: 'Movimento Inicial',
          routerLink: null
        },
        {
          title: 'Recebimentos',
          routerLink: null
        },
        {
          title: 'Repasses',
          routerLink: null
        },
        {
          title: 'Relatórios',
          routerLink: null
        }
      ]
    },
    {
      title: 'plancob',
      isOpen: false,
      disabled: true
    },
    {
      title: 'tesouraria',
      isOpen: false,
      disabled: true
    },
    {
      title: 'bancos',
      isOpen: false,
      disabled: true
    },
    {
      title: 'pessoal',
      isOpen: false,
      disabled: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  handleMenuClick(item: IMenuItem) {
    if (item.disabled) {
      return;
    }
    item.isOpen = !item.isOpen;
  }

}

interface IMenuItem {
  title: string,
  isOpen: boolean,
  disabled?: boolean,
  children?: Array<{ title: string, routerLink: string}>
}
