//10. Crie uma Arrow Function chamada verificarIdade que receba uma idade e retorne "Maior de idade" se a idade for maior ou igual a 18 anos, ou "Menor de idade" caso contrário.

const idade = 20

const verificarIdade = (a) => {if(a>18) return "Maior de Idade"; if(a<18) return "Menor de idade"; if(a===18) return "Igual a 18"}
console.log(verificarIdade(idade))