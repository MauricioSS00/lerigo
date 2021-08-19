import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espaco-list',
  templateUrl: './espaco-list.component.html',
  styleUrls: ['./espaco-list.component.scss']
})
export class EspacoListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  new() {
    this.router.navigate(['espaco-cad']);
  }

}
