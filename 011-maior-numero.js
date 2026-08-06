//5. Crie uma função declarada chamada maiorNumero que receba dois números e retorne o maior deles.

a = 5; b = 6

/*
function maiorNumero(){
    if (a > b)
       return  a
    if (b > a)
        return b
    if (a == b)
        return "vai toma no cu"
}
*/

/*
const maiorNumero = (a > b)? a : maiorNumero2 = (b > a)? b : "e igual"
console.log(maiorNumero)
 */

const maiorNumero = () => {if (a>b) return a; if (b>a) return b; if (a===b) return "vai toma no cu"}
console.log(maiorNumero())