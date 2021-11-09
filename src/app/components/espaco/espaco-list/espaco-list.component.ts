import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspacoService } from '../espaco.service';

@Component({
  selector: 'app-espaco-list',
  templateUrl: './espaco-list.component.html',
  styleUrls: ['./espaco-list.component.scss']
})
export class EspacoListComponent implements OnInit {

  espacos: any = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(
    public espacoService: EspacoService
  ) { }

  ngOnInit(): void {
    this.carregarEspacos();
  }

  carregarEspacos() {
    this.espacos = this.espacoService.listarEspacos();
  }
}
