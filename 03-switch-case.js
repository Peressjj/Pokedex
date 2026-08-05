//Monte o menu: 1 café, 2 pão de queijo, 3 suco. Qualquer outro número mostra Opção inválida.
//• use switch com o número da opção
//• não esqueça o break em cada case
//• use default para a opção inválida
//• teste com 2 e depois com 9

let opcao = 9
console.log("Selecione a opcao desejada:" +
    "\n01 - Cafe" +
    "\n02 - Pao de queijo" +
    "\n03 - Suco" +
    "\n04 - Sair")

switch (opcao) {
    case 1:
        console.log("CAFEEEEEEEEEEEEEEE")
        break
    case 2:
        console.log("PAOOODEQUEIJOOOOOO")
        break
    case 3:
        console.log("SUCOOOOOOOOOOOOOOO")
        break
    default:
        console.log("Opcao Invalida")
        break
    case 4:
        break
}