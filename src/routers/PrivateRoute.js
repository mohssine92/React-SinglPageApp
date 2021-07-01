import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';





/* 191 : la idea de ruta privadas , es renderizar el componentePage relacionado al url depende de una condicion a cumplir como es el caso de de autenticacion
 * siempre abra types de referencia 
*/
export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component, // componente que el user quiere renderizar - Ojo desestructuracion + Renombrar Component
    ...rest //  todo los demas argumentos como : exact , path ... necesito recuperarlos utulizando operador Rest 
}) => {


    /* 193 . Recordar la ultima pagina visitada en caso de logout o token caducado  
     * Objetivo :  al logearse se rederige directamente a la misma ,
     * podemos conct los queries tambien ..  
     * tener en cuenta que estamos dentro de un router principal : Router.provider : -> en proceso de desestructuracion de props en ...rest tenemos todo lo que prove el router
    */
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest } // <=  path="/" exat etc // pasarle todo esto al componente de esta ruta 
                component={ (props) => ( // returno componenet de manera condicional
                    // usamos callback es igual como el useState cuando no encontramos en mismo componente y queremos modificar el estado

                    ( isAuthenticated )
                        ? ( <Component { ...props } /> ) // Componente sera el componente por lo cual el user quiere entrar 
                        : ( <Redirect to="/login" /> )
                )}
        
        />
    )
}

// Obligar a recibir estos props con typos indicados 
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
