import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from 'src/app/components/usuario/usuario.service';
import { AppGlobals } from './appGlobals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  menuUser: MenuItem[];
  menuLogar: MenuItem[];
  mostrarLogin = false;
  email: string;
  password: string;

  constructor(
    private router: Router,
    public appGlobals: AppGlobals,
    private userService: UsuarioService
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

    this.menuLogar = [
      {
        label: 'Fazer Login',
        icon: 'fas fa-sign-in-alt',
        command: () => this.fazerLogin()
      }
    ]
  }
  minhaArea() {
    console.log("Pediu para sair");
  }

  fazerLogin() {
    this.mostrarLogin = true;
  }

  acessar() {
    this.appGlobals.logado = true;
    this.userService.login(this.email, this.password)
      .then( rs =>{
        console.log(rs);
      });

    this.mostrarLogin = false;
  }
}
