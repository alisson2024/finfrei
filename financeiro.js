import prompt from "prompt-sync";
let ler = prompt()

import { Repetir, confirmar, deposito, saque } from "./exibicao.js";

export function Depositar(saldoAtual) {
  
    
    let saldo = saldoAtual
    let desejacontinuar = true

    while (desejacontinuar == true) {
        //Novo deposito
        let depositar = deposito()

        //Confirmar deposito
        let autorizacaodedeposito = confirmar()

        if (autorizacaodedeposito == 'OK' || autorizacaodedeposito == 'ok') {
            console.log('Valor na conta!');
            saldo +=  depositar
        } else if (autorizacaodedeposito == 'C' || autorizacaodedeposito == 'c') {
            console.log('deposito não autorizado!');
        }

        //Realiza outro deposito
        let desejadepositarnovamente = Repetir('Depositar')

        if (desejadepositarnovamente == 'sim') {
            desejacontinuar = true
        } else {
            desejacontinuar = false
        }
        depositar = 0
    }
    return saldo
}

export function Sacar(saldoAtual) {
    console.clear()
    
    let saldo = saldoAtual
    let continua = true
    
    while (continua) {

        //Novo saque
        let sacar = saque()

        //Confirmar saque
        let confirmarSaque = confirmar()

        if (confirmarSaque == 'ok' || confirmarSaque == 'OK') {
            if (saldo < sacar) {
                console.log('saldo insuficiente!');
            }else{
                console.log('valor retirado!');
                saldo -= sacar
            }
        } else {
            console.log('Saque cancelado!');
        }

        //Realiza outro saque
        let sacarNovamente = Repetir('Sacar')

        if (sacarNovamente == 's' || sacarNovamente == 'S') {
            continua = true
        } else {
            continua = false
        }
        sacar = 0
    }
    return saldo
}

export function ExibirSaldo(saldoAtual) {
    console.clear()
    let saldo = Number(saldoAtual)

console.log(`


    Saldo Atual: R$ ${(saldo.toFixed(2))}


`);

    console.log('Pressione enter para continuar!');
    ler()
}