

const persona = {
    nombre: 'Tony',
    apellido: 'San',
    edad: 25,
    direccion: {
        ciudad: 'New York',
        zip: 555612,
        lat: 14.5574,
        lng: 144.25,
    }
};

//console.table( persona);


//al assignar una variable anterioa auna nueva
// se piensa que se clona, pero en realidad
// se le asigna la referencia al objeto 
// de la primera variable mas no crea
// un nuevo espacio de memoria, por lo tanto, 
// para duplicar o clonar un objeto se utiliza el
//operador expret  y ahi se clona pero generando un nuevo
//espacio de memoria.

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log( persona);
console.log(persona2)