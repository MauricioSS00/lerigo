import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-midia',
  templateUrl: './listagem-midia.component.html',
  styleUrls: ['./listagem-midia.component.scss']
})
export class ListagemMidiaComponent implements OnInit{

  @Input() objeto: any = [];

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

  constructor() { }
  ngOnInit() {
    console.log(this.objeto[0].images);
  }


}
