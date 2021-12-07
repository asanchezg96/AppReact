//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'

//import heroes, {owners}  from "../data/heroes";
import heroes  from "../data/heroes";

//import { heroes } from "./data/heroes";

//console.log(heroes);

//heroes

//const getHeroesById = (id) => {
//    return  heroes.find( ( heroe ) => { 
//        if (heroe.id === id) {
//            return true;
//        }else {
//            return false;
//        }
//    });
//};

export const getHeroesById = ( id ) => heroes.find( ( heroe ) => heroe.id === id );



//const {id, nombre, owner } = getHeroesById(1);
//console.log( id, nombre, owner);
//console.log( getHeroesById(1));

// Filters
export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
//console.log( getHeroesByOwner('DC'));

