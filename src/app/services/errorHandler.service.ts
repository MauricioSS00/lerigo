import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root',
})
export class ErrorHandlerService {

    constructor(
        private router: Router
    ) { }

    errorHandler(response) {
        let msg = this.validaMsgError(response);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg
        });
    }

    validaMsgError(response: Response): string {
        let retorno = '';
        switch (response.status) {
            case 401:
                this.router.navigate(['home']);
                retorno = 'Sua Sessâo expirou, por gentileza realiza o login novamente para continuar!';
                break;

            default:
                retorno = `Não foi possível concluir sua solicitação, tente novamente mais tarde! 
                \n
                Caso o problema persista entre em contato com nossa Equipe!`
        }
        return retorno;
    }
}