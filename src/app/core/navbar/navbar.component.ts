import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'HOME',
        routerLink: ['home']
      },
      {
        label: 'EVENTOS',
        routerLink: ['evento']
      },
      {
        label: 'ESPAÇOS',
        routerLink: ['espaco-list']
      },
      {
        label: 'ARTISTAS',
      },
      {
        label: 'PRODUTOR',
      },
      {
        label: 'QUEM SOMOS',
      },
      {
        label: 'BLOG',
      },
      {
        label: 'CONTATO',
      },
    ];
  }

}
