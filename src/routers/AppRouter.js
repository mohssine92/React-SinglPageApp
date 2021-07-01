import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
   // Route
} from 'react-router-dom'; // no olvidar de instalar paquete 
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

import { PrivateRoute } from './PrivateRoute'; // componente para proteger rutas - returna un Route renderizando un componente si cumpla la condicion (proteccion)
import { PublicRoute } from './PublicRoute';

//import { DashboardRoutes } from './DashboardRoutes';



/* 
 * es una funcion componente comun y corriente que tiene un router dentro  
*/
export const AppRouter = () => {
   

    /* leer y extraer el estado del reducer que prova el context
     *
    */
    const { user } = useContext( AuthContext );

    return (
        <Router>
            <div>
                <Switch>  {/*  un switchcase de routas */}


                    <PublicRoute exact
                                 path="/login"
                                 component={ LoginScreen }
                                 isAuthenticated={ user.logged } />

                
                    <PrivateRoute  path="/"
                                   component={ DashboardRoutes } 
                                   isAuthenticated={ user.logged } 
                    
                    />  {/* rederizacion de componente consta de rutas-hijas - no usar exact */}


                {/* Nota : el redirect to no lo estoy usando en systema de routas principal  */}
                {/* Nota : en este caso protego una ruta de un router de rutas hijas - pero tambien puedo proteger rutas independientes .. tengo la libertad de implementar */}
                {/* asi si protego  DashboardRoutes : protego todas sus rutas (Rutas hijas) */}
                </Switch>
            </div>
        </Router>
    )
}
