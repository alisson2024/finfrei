import prompt from "prompt-sync";
let ler = prompt()

export function deposito() {
    let guardar= 0
    
    while (guardar <= 0) {
        console.log("Digite o valor que deseja Depositar: ")
        guardar = Number(ler())
    }

    return guardar
}

export function saque() {
    let tirardinheiro = 0

    while (tirardinheiro <= 0) {
        console.log("Digite o valor que deseja Sacar: ")
        tirardinheiro = Number(ler())
    }

    return tirardinheiro
}

export function confirmar() {
    console.log('Digite "Ok" para confirmar ou "C" para cancelar');
    let confirmar = ler()

    return confirmar
}

export function Repetir(mensagem) {
    console.log(`${mensagem} novamente?`);
    let resposta = ler()

    console.clear()

    return resposta
}

