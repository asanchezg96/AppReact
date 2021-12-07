//Promesas
//Las promesas son asincronas y primero se ejecuta el codigo osea lo sincrono y luego la promesa
//import  { getHeroesById } from './bases/08-imp-exp'

import { getHeroesById } from "./bases/08-imp-exp";



// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout(() => {
//         const heroexp = getHeroesById(2);
//         resolve (heroexp);
//         //reject (heroexp);
//         //reject ('No se pudo encontrar el heroe');
//         //console.log(heroexp)

//         //resolve();
//         //console.log('2 segundos despues')
//     }, 1000)
// });

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe)
// })
// .catch ( err => console.warn (err));

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
    
        setTimeout(() => {
            const heroexp = getHeroesById(id);
            if (heroexp ) {
                resolve (heroexp);
            } else {
                reject('No se pudo encontrar el heroe');
            }

            //reject (heroexp);
            //reject ('No se pudo encontrar el heroe');
            //console.log(heroexp)
    
            //resolve();
            //console.log('2 segundos despues')
        }, 2000)
    });
}


getHeroeByIdAsync(1)
    //.then( heroe => console.log('Heroe', heroe))
    .then( console.log)
    //.catch( err =>  console.warn (err) );
    .catch( console.warn );