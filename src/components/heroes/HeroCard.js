import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';





/* esto es propio de webpack 
 * material adjunto ha enlace 211 - true : paraque busque tambien en subdirectorios
*/
const heroeImage = require.context('../../assets/heroes', true );


export const HeroCard = ({
    id,   // o recibir heroe => luego desesctructurarlo .. queda a nuesta descricion 
    superhero, 
    alter_ego,
    first_appearance,
    characters,

}) => { 


    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
         
            <div className="row no-gutters">

                <div className="col-md-4">
                   {/*  <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } /> */}
                  <img src={ heroImages(`./${ id }.jpg`).default } className="card-img" alt={ superhero } />
                    
                </div>

                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text"> { alter_ego} </p>

                        {
                            ( alter_ego !== characters ) /* and logico  && si cumpla muestra <p>  */
                                && <p className="card-text text-danger"> { characters } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link>{/*  link es cosa del router = sustutye el ancore tag <a> , y no hace refresh: como ventaja */}

                    </div>

                </div>

            </div>

        </div> /* remplazar el card como queramos - lo importante la data llega filtrada   */
    )

}
