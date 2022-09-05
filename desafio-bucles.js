/**
 * \n es un salto de linea en consola
 */

/**
 * iterar del 1 al 20
 * imprimir los numeros impares
 */
console.log('\nNúmeros impares');
var i = 1;
while(i <= 20){
    if(i%2 !== 0 ){
        console.log(i);
    }
    i++;
}

/**
 * iterar del 100 al 0
 * imprimmir los multiples de 3
 */
console.log('\nNúmeros divisibles por 3');
for(var i=100 ;  i >= 0 ; i--){
    if(i%3 == 0){
        console.log(i);
    }
}

/**
 * imprimir la secuencia 4, 2.5, 1, -0.5, -2, -3.5
 */
console.log('\nSecuencia  4, 2.5, 1, -0.5, -2, -3.5');
for(var i = 4; i >= -3.5; i =i-1.5 ){
    console.log(i);
}

/**
 * sumar todos los números del 1 al 100
 * y luego imprimir el resultado
 */

console.log('\nSumatoria del 1 al 100');
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log('Sumatoria total: ' + sum);

/**
 * Factorial del 1 al 12
 */
console.log('\nFactorial del 1 al 12');
var product = 1;
for(var i = 1; i <= 12; i++){
    product = product * i;
}
console.log('Resultado factorial: ' + product);