import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cars = [
    './assets/imgs/logo.png',
    './assets/imgs/logo.png',
    './assets/imgs/logo.png',
    './assets/imgs/logo.png',
    './assets/imgs/logo.png',
    './assets/imgs/logo.png'
  ];
  responsiveOptions = [];
  pessoa = { nome: '', email: '', senha: '' };
  value4: string;

  constructor(
    private router: Router,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  gravar(ngForm: NgForm) {
    console.log(this.pessoa);
    this.router.navigate(['usuario-cad']);
  }

}
