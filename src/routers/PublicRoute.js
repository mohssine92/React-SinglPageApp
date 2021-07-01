import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';




/* es otra funcion componente comun y corriente : solo va tener un comportamiento especial  
 *
*/
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
             // caso opuesto No se va a renderizarse componente page de login si estamos autenticados
            component={ (props) => ( // no autenticado !fales es true se renderiza , auetenticado !true es false no se renderiza 
                ( !isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/" /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
