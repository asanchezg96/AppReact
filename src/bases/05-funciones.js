//Funciones en JS
//const saludar = function (nombre){
//    return `Hola, ${ nombre }`
//}
// Se recomienda trabajar a las funciones
// como constantes 

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;
//console.log(saludar('Goku'))

console.log(saludar2('Lenta'));
console.log(saludar3('Tony'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_papi235'
    }
};


const getUser2 = () =>
    ( {
        uid: 'ABC124',
        username: 'El_pepa'
    });

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

//Tarea
// 1. Transformen a una fucino de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas 

function getUserActivo (nombre) {
    return {
        uid: 'ABC156',
        username: nombre
    }
};

const usuarioActivo = getUserActivo('Anthony');
console.log(usuarioActivo);


//1. 
const getUserActivo2 = (nombre) =>(
    {
        uid: 'ABC156',
        username: nombre
    }
);

const usuarioActivo2 = getUserActivo2 ('Tony Lenta');
console.log(usuarioActivo2);