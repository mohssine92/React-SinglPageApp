import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

   /* como el provedor es Context creado , asi el hook useContest se encarga de hacer  Lectura del context  
    * y extraecion del estado del reducer
   */
    const { user:{name} , dispatch } = useContext( AuthContext );


    /* history la hemos obtenido como props cuando estamos dentro de un router . lo prova Router.provider
     * en este caso usamos otra alternativo que es un hook lo expuesta la libreria de react-router-dom 
     * y porque props history no en este caso ? - porque este componente no forma parte del switch de un Router : asi no tiene acceso a history como props
     * podemos decir que navbar solo es componente uttulizado dentro de una ruta .
     * Router y context son similares son providers , ambos usan hooks para la extraccion de data provida
     */
    const history = useHistory();


    /* este dispach del Reducer : representar desconectar del back 
     * tener en cuenta en este ejercicio no estamos conectado a un back-end
     * el dispatch cambia el estado del Reducer que expone su estado y su dispach accion y lo prove a atraves del Context a todos componentes de la app
    */
    const handleLogout = () => {
    
        history.replace('/login');

        dispatch({ // nuevo estado - segnificaria actualizacion del storage debido el effecto en el componente pricipal : muchas instrucciones encaednadas ... :D 
            type: types.logout
        });

    }

  


    return (
        
        // esto es un ejemplo de navbar comun y corriente de boostrap  
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-info"> 
                       { name } 
                   </span>

                   {/*  <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink> */}

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout } /* onclick es un evento en escuha de click sobre el elemento Button  */
                    > 
                        Logout
                    </button>


                </ul>
            </div>
            
        </nav>
    )
}