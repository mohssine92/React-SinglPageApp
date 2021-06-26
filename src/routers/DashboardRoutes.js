import React from 'react';

import { Navbar } from '../components/ui/Navbar';

import { Switch, Route, Redirect } from 'react-router-dom';

// componnetes-funcion
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen'; 


/* 
 * para crear rutas hijas : es crear una funcion componente que va a funcionar igual que component AppRouter 
 * con la unica excepcion : no va tener <router> propiamente pero los demas si ...
*/ 
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar /> 

             <div className="container mt-2">
                <Switch> {/* swtch - case  para rutas hijas */} 

                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" /> {/* recorda que to="/" => esta definida en AppRouter:rutas principal */} 
                    {/* aqui en caso de uso en laravel -  si no encontro path posible , le mando a una path recibida por router de laravel . */}

                </Switch>
            </div>


        </>
    )
}
