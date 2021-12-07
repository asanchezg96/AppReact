// Desestruccionacion 
// Asignacion desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre:nombre2 } = persona;

//console.log(nombre2);

//const { nombre, edad, clave } = persona;

//console.log(nombre, edad, clave);
//console.log(persona.edad);
//console.log(persona.clave);

//Desestruturacion en objeto
//const retornapersona = (usuario) => {
//    const { nombre, edad, clave } = usuario;
//    console.log( nombre, edad, clave);
//}


// Desestructuracion directamente 
const uuseContext = ( {clave,nombre, edad, rango= 'capitan'}) => {
    //console.log( nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.54,
            lng: 253.2,
        } 
    }
}

//Desestructuracion en una variable con la funcion como objeto
//const avenger = uuseContext (persona);
//const {nombreClave,anios}=avenger;
//console.log(avenger);

//Desestruturacion directamente en la funcion en sus respectivas constantes es con {}
const {nombreClave,anios, latlng: { lat, lng }}=uuseContext(persona);
console.log(nombreClave,anios);
//console.log(latlng);
console.log(lat,lng);


