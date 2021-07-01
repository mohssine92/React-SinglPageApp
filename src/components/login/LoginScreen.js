import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'; // mi contetx
import { types } from '../../types/types';




/* 
 * si vez al arbol - vas a encontrar los props que tenemos por defecto 
 * no olvidar que este componente renderizado atraves de un componente router : ver arbol
 * asi usamos la desestructuracion para extraer history  ; ver prop en el arbol 
 *
*/
export const LoginScreen = ({ history }) => { // hay otra forma de llamar history : usando un hook viene Rect-router dom  


    /* Extraer mi context : podemos decir context me va prover un Reducer edsde un nivel superior de la app
     * siempre extraego solo lo que me interesa
    */
    const { dispatch } = useContext( AuthContext );


    const handleLogin = () => {
        /* son cosa del router para navigar  */
        // history.push('/'); // permite precedent 
        // history.replace('/'); // no permite perecendent: a este mismo componente Page

        /*   si existe valor en la variable de loacalstorage bien sino '/' 
         *  '/' la posiblidadde que un user se entre por primera vez atraves de un navigador 
        */    
        const lastPath = localStorage.getItem('lastPath') || '/';

        /* dispara accion : dispatch de un Objeto : asi en este instante el estado de este Reducer sera el valor de este objeto 
         * asi ya tengo este Objeto de nivel superior global - provedido para cualquier componente de la app 
        */
        dispatch({ 
            type: types.login, // sera evaluada en proteccion de rutas que requieren autenticacion 
            payload: {
                name: 'Fernando'
            }
        });

        history.replace( lastPath ); // navigar  

    }
 

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin } 
            >
                Login
            </button>
           
        </div>
    )
}
