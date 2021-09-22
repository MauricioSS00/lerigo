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
        routerLink: ['evento']
      },
      {
        label: 'ESPAÇOS',
        routerLink: ['espaco-list']
      },
      {
        label: 'ARTISTAS',
        routerLink: ['artista-list']
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
  minhaArea() {
    this.router.navigate(['usuario-area']);
  }
}
