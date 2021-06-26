import { heroes } from '../data/heroes';

export const getHeroById = ( id ) => {
    
    // es decir apenas encuentra uno esto seria todo - busqueda en una coleccion de objetos de la misma interfaz 
    return heroes.find( hero => hero.id === id );

}
