// Arreglos en JS

//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5)

// el operardor exzprest .. extrae informacion de de un objeto y los agrega


//Colud back, funcion que se ejecuta dentro de un metodo en cada arreglo
const arreglo3 = arreglo2.map( function(numero){
    return numero *2;
});


//Abreviado
const arreglo5 = arreglo3.map( numero => numero*5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo5);
