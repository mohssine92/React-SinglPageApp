import React , { useMemo }  from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  
  
   /* 
    * uso de funcion filter - lo que me returna es lo que estoy pintando 
    * yo deberia llamar esta funcion : getHeroesByPublisher solo cuando el publisher cambia , es decir la voy a momorizar , y darle dependencia de publisher .
    * * no segnifica siempre vamos a usar useMemo , solo cuando observamos tenemos proceso pesado y no hay porque debe ejecutarse cada vez se renderiza componente HeroList
   */
   // const heroes = getHeroesByPublisher( publisher );
   // optimisacion
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           <ul>
               {
                    heroes.map( hero => ( /* barrer los elemntos - mostrarlos en pantalla  */
                        <HeroCard
                            key={ hero.id }
                            { ...hero } // mandar las props independientes como la estoy esperando ...
                        /> 
                          
                   ))
               } 
           </ul> 
        </div>
       
    )
}
