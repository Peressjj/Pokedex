//Use um ternário para decidir a mensagem de acesso a partir da idade da pessoa.
//• condição: idade >= 18
//• guarde o resultado em uma variável
//• imprima com template string
//• depois reescreva com if/else e compare o tamanho

let idade = 21
idade >= 18 ? console.log(`Permited ${idade}`) : console.log(`No permited ${idade}`)

if (idade >= 18) {
    console.log(`Permited ${idade}`)
}else{
    console.log(`No permited ${idade}`)
}