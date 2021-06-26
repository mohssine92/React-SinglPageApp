import React, { useMemo } from 'react';
import queryString from 'query-string'; // instalar este paquete - no hay manera directa de empujar varios queries ?q=edf&f=343 en react V:181 nota:queries
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';




export const SearchScreen = ({ history }) => {


    // extraer location usan hook - otra alternativa ver props . V: 181
    const location = useLocation();                                   //  console.log(location); 
    const { q = '' } = queryString.parse( location.search );           // console.log(location.search);   console.log(queryString.parse( location.search )) - desestructuro solo lo que me interesa en este caso q 
   // si no recibo queries sera undefined - asi por default sera string vacio - evitando errores


    // mi custom hook - control state form 
    const [ formValues, handleInputChange ] = useForm({
        searchText: q // nada mas le estoy dando valor por defecto para el estado del input ...
    }); 
    const { searchText } = formValues; // la salida


    // heroesFiltered : es la que vamos a estar bareando .
    /* dependencia [q] , asi los resultados en heroesFiltered quedan memorizados hasta que al dependencia sufre cambios asi - se ejecutara la funcion de filter 
     *asi si no usar usemo cada vez este componenet se renderiza - se ma reepintando y eso no debe pasar reepintamos solo cuando es necesario : es decir solo cuando la dependecia cambia 
     * porque cada vez escribo algo en input estoy cambiando el state asi se renderiza todo el componnete , con use memo no dejo el instruccion que se ejecute por defecto solo segun su dependencia .  
     * uso q como dependecia porque no va a sufrir cambios hasta que hago el posteo del form y es el comportamiento que necesito
     * si avanzo y vuelvo a la misma pagina - va barrer porque tiene memorizado los valores gracias a useMemo  
    */
    const heroesFiltered = useMemo( () => getHeroesByName( q ),  [q] ) 


    // posteo del form 
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`); // en este caso no estoy empujando ruta completa conocida por router - estoy empujando solo un query a la misma ruta - objetivo mantener la ultima busqueda en caso de procedent o
                                            // si mandamos link a otra persona por whatssapp cae en la busqueda directamente

        console.log(searchText) // extaredo - despues de procesarce en useForm : mi cutom hook
    }
   



    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText" /* es importante para funcionamiento de mi useForm */
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } // evento 
                        />
                    
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='')   /* expresion and - si cumpla se ejecuta los siguiente  */
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
