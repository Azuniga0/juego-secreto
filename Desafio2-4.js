/*
Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = [];
/*
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python']
/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/
lenguajesDeProgramacion.push('Java', 'Ruby' , 'GoLang');
/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/
let muestraLenguajesDeProgramacion = function () {
    let texto = '';
    for (let x = 0; x < lenguajesDeProgramacion.length; x++) {
        texto += (x != lenguajesDeProgramacion.length-1) ? `${lenguajesDeProgramacion[x]}, ` : `${lenguajesDeProgramacion[x]}.` ;        
    }
    return texto;
}
console.log("Los lenguajes son: "+ muestraLenguajesDeProgramacion());
/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/
let muestraLenguajesDeProgramacionInverso = function () {
    let texto = '';
    for (let x = lenguajesDeProgramacion.length-1; x >= 0; x--) {
        texto += (x == 0) ? `${lenguajesDeProgramacion[x]}.` : `${lenguajesDeProgramacion[x]}, ` ;        
    }
    return texto;
}
console.log("Los lenguajes son: "+ muestraLenguajesDeProgramacionInverso());
/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/
let listaNumeros = [5,8,10,9,6,8,3,6,6,7];
let promedio = function() {
    let promedioSumatoria = 0;
    let sumatoria = 0;
    for (let x = 0; x < listaNumeros.length; x++) {
        sumatoria = listaNumeros[x] + sumatoria;        
    }
    promedioSumatoria = sumatoria / listaNumeros.length;
    return [listaNumeros.length, promedioSumatoria];
}
const valores = promedio();
console.log(`El promedio de la lista con ${valores[0]} elementos es: ${valores[1]}`);
/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/
let comprobarMaximo = listaNumeros[0];
let comprobarMinimo = listaNumeros[0];
function maximoMinimo() {
    for (let z = 0; z < listaNumeros.length; z++) {
        comprobarMaximo= (comprobarMaximo < listaNumeros[z]) ? comprobarMaximo = listaNumeros[z] : comprobarMaximo = comprobarMaximo;
    }
    
    for (let z = 0; z < listaNumeros.length; z++) {
        comprobarMinimo= (comprobarMinimo > listaNumeros[z]) ? comprobarMinimo = listaNumeros[z] : comprobarMinimo = comprobarMinimo;
    }
    return [comprobarMaximo, comprobarMinimo];
}
const extremos = maximoMinimo();
console.log(`El máximo es: ${extremos[0]} y el mínimo es: ${extremos[1]}`);
/*
Crea una función que devuelva la suma de todos los elementos en una lista.
*/
let suma = function() {
    let sumatoria = 0;
    for (let x = 0; x < listaNumeros.length; x++) {
        sumatoria = listaNumeros[x] + sumatoria;        
    }
    return [listaNumeros.length, sumatoria];
}
const sumaResultado = suma();
console.log(`La suma de la lista con ${sumaResultado[0]} elementos es: ${sumaResultado[1]}`);
/*
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/
let posicionEnLista = function(numeroExiste) {
    let indiceExiste = 0;
    
    for (let z = 0; z < listaNumeros.length; z++) {
        //(listaNumeros[z] == numeroExiste) ? indiceExiste = z  : indiceExiste = -1;
        
        if(listaNumeros[z] == numeroExiste) {
            indiceExiste = z;
            break;
        } else {
            indiceExiste = -1;
        }
    }
    return indiceExiste;
}
console.log(`El número existe en la posicion ${posicionEnLista(2)}`);
/*
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
*/
let listaNumeros2 = [5,4,9,10,7,3,8,9,4,10];
function sumaDeListas() {
    let listasSumadas = [];
    for (let y = 0; y < listaNumeros.length; y++) {
        listasSumadas.push(listaNumeros[y] + listaNumeros2[y]);        
    }
    return listasSumadas;
}
console.log(`Las listas sumadas son: ${sumaDeListas()}`);
/*
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/
let cuadrado = function() {
    let cuadradoNumeros = [];
    for (let x = 0; x < listaNumeros.length; x++) {
        cuadradoNumeros.push(listaNumeros[x] * listaNumeros[x]);        
    }
    return [listaNumeros.length, cuadradoNumeros];
}
const cuadradoLista = cuadrado();
console.log(`El doble de la lista con ${cuadradoLista[0]} elementos es: ${cuadradoLista[1]}`);