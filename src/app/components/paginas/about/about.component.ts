import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  equipe: any = [];

  constructor() { }

  ngOnInit(): void {
    this.equipe.push(
      {
        nome: "João",
        funcao: "Produtor",
        img: "https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg",
        desc: "Descricao"
      }
    );
    this.equipe.push(
      {
        nome: "João",
        funcao: "Produtor",
        img: "https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg",
        desc: "Descricao"
      }
    );
    this.equipe.push(
      {
        nome: "João",
        funcao: "Produtor",
        img: "https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg",
        desc: "Descricao"
      }
    );
  }

}
