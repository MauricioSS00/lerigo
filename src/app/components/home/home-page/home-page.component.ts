import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/components/usuario/usuario.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService]
})
export class HomePageComponent implements OnInit {

  cars = [
    './assets/imgs/event1.png',
    './assets/imgs/event2.png',
    './assets/imgs/event3.png',
    './assets/imgs/event1.png',
    './assets/imgs/event2.png',
    './assets/imgs/event3.png'
  ];
  responsiveOptions = [];
  user: any = [];
  value4: string;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    public msgService: MessageService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1750px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1086px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '750px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  gravar(ngForm: NgForm) {
    this.usuarioService.cadRapido(this.user)
      .then(rs => {
        this.user.id = rs;
        this.usuarioService.usuario = this.user;
        this.router.navigate(['usuario-cad']);
      })
      .catch(er => {
        this.msgService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar seu cadastro, tente novamente mais tarde!' });
      });
  }

}
