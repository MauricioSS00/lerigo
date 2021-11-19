import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  constructor(
    private router: Router,
    private eventoService: EventoService
  ) { }

  ngOnInit(): void {
    this.listarEventos();
  }

  novoEvento() {
    this.router.navigate(["evento-cad"]);
  }

  listarEventos(){
    this.eventoService.listarEventos();
  }

}
