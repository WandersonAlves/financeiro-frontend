import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  public menuItems: Array<IMenuItems> = [
    {
      title: 'cadastros',
      isOpen: false,
      children: [
        {
          title: 'Unidade',
          routerLink: null
        },
        {
          title: 'Usuario',
          routerLink: null
        },
        {
          title: 'Bancos',
          routerLink: null
        },
      ]
    },
    {
      title: 'cadastros',
      isOpen: false,
      children: [
        {
          title: 'Unidade',
          routerLink: null
        },
        {
          title: 'Usuario',
          routerLink: null
        },
        {
          title: 'Bancos',
          routerLink: null
        },
      ]
    },
    {
      title: 'cadastros',
      isOpen: false,
      children: [
        {
          title: 'Unidade',
          routerLink: null
        },
        {
          title: 'Usuario',
          routerLink: null
        },
        {
          title: 'Bancos',
          routerLink: null
        },
      ]
    },
    {
      title: 'cadastros',
      isOpen: false,
      children: [
        {
          title: 'Unidade',
          routerLink: null
        },
        {
          title: 'Usuario',
          routerLink: null
        },
        {
          title: 'Bancos',
          routerLink: null
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface IMenuItems {
  title: string,
  isOpen: boolean,
  children: Array<{ title: string, routerLink: string}>
}
