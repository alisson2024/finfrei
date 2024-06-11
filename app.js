import { Depositar, ExibirSaldo, Sacar,  } from "./financeiro.js"
import { menu , JAJA} from "./menu.js"
console.clear()

const bom=``;
  
  console.log(bom)

let carteira = 500
let seguiremfrente = true

while (seguiremfrente) {
    let opcao = menu()

    if (opcao == 1) {
        carteira = Depositar(carteira)
    }else if(opcao == 2){
        carteira = Sacar(carteira)
    }
    else if(opcao == 3){
        ExibirSaldo(carteira)
    }  
    else if(opcao == 4){
        JAJA(carteira)
    } 
    else if (opcao == 0) {
        seguiremfrente = false
    }
}
