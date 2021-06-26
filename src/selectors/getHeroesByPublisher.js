import { heroes } from '../data/heroes'; // referencia a la coleccion de data 


/* es una funcion de flecha simple - */
export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']; 

    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`); /*    throw new : dispara error - sale en consola */
    }
   
    // filtrar => returna coleccion de elementos que cumplan la condicion
    return heroes.filter( hero => hero.publisher === publisher );

}
    