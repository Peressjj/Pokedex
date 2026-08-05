//Boletim do aluno Classifique uma nota: 9+ Excelente, 6+ Aprovado, 4+ Recuperação, abaixo disso Reprovado.
//• use if / else if / else
//• teste com 10, 7, 5 e 2
//• cuidado com a ordem das condições
//• compare sempre com >= e ===

let notas = [10, 7, 5, 2]
    for (let n in notas){
        if (notas[n] >= 9){
            console.log(`Excelente, Resultado: ${notas[n]}`)
        }else if (notas[n] >= 6){
            console.log(`Aprovado, Resultado: ${notas[n]}`)
        }else if (notas[n] >= 4){
            console.log(`Recuperacao, Resultado: ${notas[n]}`)
        }else{
            console.log(`Reprovado, Resultado: ${notas[n]}`)
        }
    }