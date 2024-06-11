import prompt from "prompt-sync";
let ler = prompt()

export function menu() {
   
    console.log(
`Selecione uma opção:
1 - Depositar
2 - sacar
3 - Exibir saldo
4 - simulação de investimento
0 - sair
`);

    let opcaoEscolhida = Number(ler())

    return opcaoEscolhida
}

export function JAJA(juros, tempo, inicial) {
console.clear()

console.log('insira a quantidade desejada para investir')    
inicial = Number(ler())

console.log('qtd de juros')
juros = Number(ler())


console.log('quanto tempo deseja investir ? ')
tempo=Number(ler())

const juuj = (juros / 100) + 1

let vetor = []

let oi=0
for(let i = 0; i <= tempo; i++ ){

vetor[i] = inicial *  (juuj)**tempo



    oi=vetor[i].toFixed(2)

}
console.log(`
===================================================

O lucro de seu investimento seria R$ ${oi}

===================================================

`)


} 