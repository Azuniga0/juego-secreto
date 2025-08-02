/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
/*
Si una persona pesa 70 kg y mide 1.75 metros, el cálculo sería:
IMC = 70 / (1.75 * 1.75) = 70 / 3.0625 = 22.86 
*/
let imc = (masa, altura) => masa / (altura * altura);
resultadoIMC = imc(70,1.75);
console.log(`Su IMC es ${resultadoIMC}`);
/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function factorial(numeroDado) {
    let numeroFactorial = numeroDado;
    for(num = numeroDado - 1; num > 0; num --) {
        //console.log(`${numeroFactorial} * ${num} = ${numeroFactorial * num}`); 
        numeroFactorial = numeroFactorial * num;        
    }
    return numeroFactorial;
}
let numeroCalcularFactorial = 5;
let resultadoFactorial = factorial(numeroCalcularFactorial);
console.log(`El factorial de ${numeroCalcularFactorial} es ${resultadoFactorial}`);
/*
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/
let conversionDolares = reales => (reales * 1) / 4.80;
let realesADolar = 60;
let resultadoDolaresReales = conversionDolares(realesADolar); 
console.log(`${realesADolar} reales son ${resultadoDolaresReales} dolares`);
/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
asignarTextoElemento('.textoDesafio','')
let area = function(largo, alto) {
    area = largo * alto;
    return area;
}
let perimetro = function(largo, alto){
    perimetro = (largo * 2) + (alto * 2);
    return perimetro;
}
let medidaAlto = 50;
let medidaLargo = 60;
//asignarTextoElemento('.textoDesafio',`El área es ${area(medidaAlto, medidaLargo)} m y perímetro es ${perimetro(medidaAlto, medidaLargo)}`); 
/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
asignarTextoElemento('.textoDesafio','')
let areaCircular = radio => 3.14 * (radio * radio);
let perimetroCircular = radio => 2 * 3.14 * radio;
let radio = 50;
//asignarTextoElemento('.textoDesafio',`El área es ${areaCircular(radio)} m y perímetro es ${perimetroCircular(radio)}`); 
/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

let tablaMultiplicar = function (numeroTabla){
    let multiplicacion = 0;
    let texto = '';
    for (let z = 0; z <= 10; z++) {
        multiplicacion = z * numeroTabla;
        //console.log(`${numeroTabla} * ${z} = ${multiplicacion}`);         
        texto += `${numeroTabla} * ${z} = ${multiplicacion}\n`;           
    }
    return texto;
}

console.log(tablaMultiplicar(5));

function configuracionInicial() {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}