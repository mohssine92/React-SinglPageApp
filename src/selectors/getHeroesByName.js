import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    } // es decir - cuando se llama la funcion por renderizacion del componente - y estoy en pagina estado por primera vez  - no quiero regresar ningun elemento .

    name = name.toLocaleLowerCase(); // paraque nos sea sensible la busqueda
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name )  );

}