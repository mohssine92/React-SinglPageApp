import React  , { useMemo } from 'react';
import { useParams , Redirect } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById'; 

//import batman from '../../assets/heroes/dc-arrow.jpg';  // recurso statico







export const HeroScreen = ({ history }) => { /* extraer url hay mucha manera : ver video : 176 -  ver props por default */
    // history props por default - cuando estamos dentro del router . 

    // este es custom hook : va extraer los params que van por url .
    const { heroeId }/*  params  */= useParams();
    console.log(heroeId)

    
    /* es una funcion para seleccionar desde una coleccion usando id 
     * voy a optimisar - memorizar - si la dependencia heroeId , no cambia no tengo porque volver a ejecutar esta funcion cada vez se renderiza el componente
    */
   // const hero = getHeroById( heroeId );
      const hero = useMemo( () => getHeroById( heroeId ), [ heroeId ] );
   

    if ( !hero ) { // sample : despues no puedo hacer hero.publisher de un undefined resuelta un error feo .
        return <Redirect to="/" />;
    }

     


    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/'); 
            // en caso de pagar link en otro navigador : asi me regresa a la pagina princiaplal : V : 177
        } else {
            history.goBack(); // regresar pagina anteriror 
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero; 



    return (
        <div className="row mt-5">

           <div className="col-4">
               <img 
                  // src={ `../assets/heroes/${ heroeId }.jpg` }  // carga desde public/assets - usamos siguiente alternativa : vamos a mover carpeta de imgs a src:react
                  // src={ batman }  //carga statica se usa en backfroun etc .. 
                   src={ heroImages(`./${ heroeId }.jpg`).default } // en este caso la imagen tiene que ser dinamica 
                   alt={ superhero }
                   className="img-thumbnail animate__animated animate__fadeInLeft"
               />
           </div>
   
           <div className="col-8 animate__animated animate__fadeIn">
               <h3> { superhero } </h3>
               <ul className="list-group list-group-flush">
                   <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                   <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                   <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
               </ul>
   
               <h5> Characters </h5>
               <p> { characters } </p>
   
               <button 
                   className="btn btn-outline-info"
                   onClick={ handleReturn }
               >
                   Return
               </button>
   
           </div>

       </div>
       
    )
}
