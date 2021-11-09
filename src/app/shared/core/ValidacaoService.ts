import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }

  validaCpf(cpf: String) {
    let Soma = 0;
    // Verifica se a variável cpf é igual a "undefined", exibindo uma msg de erro
    if (cpf === undefined) {
      return false;
    }

    // Esta função retira os caracteres . e - da string do cpf, deixando apenas os números 
    let strCPF = cpf.replace('.', '').replace('.', '').replace('-', '');
    // Testa as sequencias que possuem todos os dígitos iguais e, se o cpf não tem 11 dígitos, retorna falso e exibe uma msg de erro
    if (strCPF === '00000000000' || strCPF === '11111111111' || strCPF === '22222222222' || strCPF === '33333333333' ||
      strCPF === '44444444444' || strCPF === '55555555555' || strCPF === '66666666666' || strCPF === '77777777777' || strCPF === '88888888888' ||
      strCPF === '99999999999' || strCPF.length !== 11) {
      return false;
    }

    // Os seis blocos seguintes de funções vão realizar a validação do CPF propriamente dito, conferindo se o DV bate. Caso alguma das funções não consiga verificar
    // o DV corretamente, mostrará uma mensagem de erro ao usuário e retornará falso, para que o usário posso digitar novamente um número para ser testado
    //Multiplica cada digito por numeros de 1 a 9, soma-os e multiplica-os por 10. Depois, divide o resultado encontrado por 11 para encontrar o resto
    for (let i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    let Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(9, 10))) {
      return false;
    }

    Soma = 0;
    for (let k = 1; k <= 10; k++) {
      Soma = Soma + parseInt(strCPF.substring(k - 1, k)) * (12 - k);
    }

    Resto = (Soma * 10) % 11;
    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(10, 11))) {
      return false;
    }

    return true;
  }

  //Função que irá testar se o CNPJ é valido 
  validarCnpj(cnpj: String) {
    // Verifica se a variável cnpj é igua a "undefined", exibindo uma msg de erro
    if (cnpj === undefined) {
      return false;
    }

    // Esta função retira os caracteres . / - da string do cnpj, deixando apenas os números 
    let strCNPJ = cnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');

    // Testa as sequencias que possuem todos os dígitos iguais e se o cnpj não tem 14 dígitos, retonando falso e exibindo uma msg de erro
    if (strCNPJ === '00000000000000' || strCNPJ === '11111111111111' || strCNPJ === '22222222222222' || strCNPJ === '33333333333333' ||
      strCNPJ === '44444444444444' || strCNPJ === '55555555555555' || strCNPJ === '66666666666666' || strCNPJ === '77777777777777' ||
      strCNPJ === '88888888888888' || strCNPJ === '99999999999999' || strCNPJ.length !== 14) {
      return false;
    }

    // A variável numeros pega o bloco com os números sem o DV, a variavel digitos pega apenas os dois ultimos numeros (Digito Verificador).
    let tamanho = strCNPJ.length - 2;
    let numeros: any = strCNPJ.substring(0, tamanho);
    let digitos = strCNPJ.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    // Os quatro blocos seguintes de funções irá reaizar a validação do CNPJ propriamente dito, conferindo se o DV bate. Caso alguma das funções não consiga verificar
    // o DV corretamente, mostrará uma mensagem de erro ao usuário e retornará falso, para que o usário posso digitar novamente um número 
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado: any = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = strCNPJ.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let k = tamanho; k >= 1; k--) {
      soma += numeros.charAt(tamanho - k) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true;
  }
}
