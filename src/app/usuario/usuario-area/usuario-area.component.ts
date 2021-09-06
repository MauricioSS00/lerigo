import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-area',
  templateUrl: './usuario-area.component.html',
  styleUrls: ['./usuario-area.component.scss']
})
export class UsuarioAreaComponent implements OnInit {

  user: any = [];
  disabledConta = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeConta() {
    if (!this.disabledConta) {
      console.log('Bloquia os campos');
      this.gravarAlterConta();
      this.disabledConta = true;
    } else {
      this.disabledConta = false;
      console.log('Libera os campos');
    }
  }

  gravarAlterConta() {
    console.log('Gravar Dados Conta');
  }

}
