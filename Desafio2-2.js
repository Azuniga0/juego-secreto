/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function mensajeBienvenida(){
    console.log("¡Hola mundo!");
}
mensajeBienvenida();
/*
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
let mensajeNombre = function(nombre){
    console.log("¡Hola, "+ nombre +"!");
}
mensajeNombre ("Yunuen");
/*
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
let numeroDoble = numero => numero * 2; 
let resultadoDoble = numeroDoble(5);
console.log(resultadoDoble);
/*
Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
let sumatoriaTriple = (a,b,c) => (a + b + c) / 2;
let resultadoSumatoriaTriple = sumatoriaTriple(3,6,9);
console.log(resultadoSumatoriaTriple);
/*
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
let esMayor = function(numero1, numero2){
    console.log(numero1 > numero2 ? `${numero1} es mayor` : `${numero2} es mayor`);    
    return;
}
esMayor(9,6);
/*
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
let numeroCuadrado = num => num * num;
let resultadoCuadrado = numeroCuadrado(6);
console.log(resultadoCuadrado);