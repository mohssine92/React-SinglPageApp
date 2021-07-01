import { types } from '../types/types';



/* esto va ser mi estado si el user esta autenticado 
 *
*/
// const state = {
//     name: 'Fernando',
//     logged: true
// }




/* Reducer no es nada mas que una simple funcion pura 
 *  
*/
export const authReducer = ( state = {}, action ) => { //  state = {} , init 

    switch ( action.type ) {

        case types.login:

            return {
                ...action.payload, // deberia ser correo
                logged: true // user autenticado 
            }

        case types.logout:

            return { // no me interesa nada lo del peyload - false desconectado o no logro autenticarse
                logged: false
            }

    
        default: // anque no haga nada returno el state actual mismo - siempre deberia maneja valor por default 
            return state;
    }

} // ahora deberia crear un context : que me permitira a mi establecer o compartir este reducer a lo largo de toda mi applicaciion