import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root',
})
export class ErrorHandlerService {

    constructor() { }

    errorHandler(response) {
        let msg = `Não foi possível concluir sua solicitação, tente novamente mais tarde! 
        \n
        Caso o problema persista entre em contato com nossa Equipe!`;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg
        });
    }
}