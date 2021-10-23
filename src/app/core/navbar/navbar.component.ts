import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  menuUser: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'HOME',
        routerLink: ['home']
      },
      {
        label: 'EVENTOS',
        routerLink: ['evento-list']
      },
      {
        label: 'ESPAÇOS',
        routerLink: ['espaco-list']
      },
      {
        label: 'ARTISTAS',
        routerLink: ['artistas']
      },
      {
        label: 'PRODUTOR',
        routerLink: ['produtores']
      },
      {
        label: 'QUEM SOMOS',
        routerLink: ['about']
      },
      {
        label: 'BLOG',
        routerLink: ['blog-list']
      },
      {
        label: 'CONTATO',
        routerLink: ['contato']
      }
    ];

    this.menuUser = [
      {
        label: 'Minha Área',
        routerLink: ['usuario-area'],
        icon: 'far fa-user'
      },
      {
        separator: true
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.minhaArea()
      }
    ];
  }
  minhaArea() {
    console.log("Pediu para sair");
  }
}
