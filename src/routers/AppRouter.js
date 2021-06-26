import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'; // no olvidar de instalar paquete 


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

//import { DashboardRoutes } from './DashboardRoutes';

/* 
 * es una funcion componente comun y corriente que tiene un router dentro  
*/
export const AppRouter = () => {
   
    return (
        <Router>
            <div>
                <Switch>  {/*  un switchcase de routas */}
                    <Route exact path="/login" component={ LoginScreen } />
                
                    <Route path="/" component={ DashboardRoutes } />  {/* rederizacion de componente consta de rutas-hijas - no usar exact */}

                    {/* Nota : el redirect to no lo estoy usando en systema de routas principal  */}
                </Switch>
            </div>
        </Router>
    )
}
