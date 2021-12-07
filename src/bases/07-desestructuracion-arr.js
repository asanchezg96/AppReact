
const personajes = [ 'Anthony', 'Chris', 'Jire'];

const [, ,p3,] = personajes;
console.log(p3);
//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);


const retornaArreglo = () =>{
    return ['ABC', 123]
};

//Desestructuracion por areglos
//const arr = retornaArreglo();
//console.log(arr);

//Desestruturacion por valores de variables
const [ letras, numeros,] = retornaArreglo();
console.log(letras,numeros,);

// Tarea
// 1. El primer valor de arr se llamara nombre
// 2. Se llamara setNombre
const uuseState= (valor)=> {
    return [ valor, ()=>{console.log('Hola mundo')}];
}

//Desestructuracion de arreglo por arreglos
//const arr = uuseState('Trunk');
//Sintaxis sin logica
//console.log(arr);
//arr[1]();
const [nombre,setnombre] = uuseState('Trunk');
console.log(nombre);
setnombre();


//Desestructuracion de arreglo por valores de arreglos
//const [nombre, setNombre ] = uuseState('Anthony');
//Sintaxis con logica
//console.log(nombre);
//setNombre();


