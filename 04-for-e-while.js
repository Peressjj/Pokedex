//Imprima a tabuada do 7 usando for e faça uma contagem regressiva de 5 até 1 usando while.
//• for: i de 1 até 10, imprima 7 * i
//• use template string na saída
//• while: comece em 5 e vá decrementando
//• extra: pule o resultado de 7 x 5 com continue

let i
let n, a = 0

for (i = 1; i<= 10; i++){
    for (n = 1; n <= 10; n++ ){
        console.log(`${i} X ${n} = ${i*n}`)
    }
}
a = 5
while( a > 0){
    console.log(a)
    a--
}