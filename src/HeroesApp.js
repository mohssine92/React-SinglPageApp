import React, { useEffect, useReducer/*  , useEffect  */} from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'


// Leer localStorage - revisar si tenemos objeto user
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
} // como 'user' es objeto por lo cual usamos JSON.parse() : para Evaluarlo : asi si exite sera returnado sino or || returna {logged} object
  // es decir { logged: false } va ser lo que estoy esbleciendo como estado inicial de manera indirecta  en el use reducer


/* 
 * este componente es nuestra applicacion - punto inicial 
 * 
*/
export const HeroesApp = () => {
    
   /* Reducer que voy a utulizar va ser : authReducer
    *  2 arg : inicial state 
    * init porque voy a leer local storage  : ver la seccion anterior bien esplicado
    * dispatch la dejo asi porque voy a hacer dispatch de acciones donde yo quiero en app
   */
    const [ user, dispatch ] = useReducer( authReducer, {}, init );



   /* user : representa el estado de autenticacion - y esta expuesto por un Reducer que estara provedido por un context recient creado 
    * asi usamos efecto de dependencia , la dependencia es user : asi cuando user sufre cambios : disparamos actualizacion de la variable en storage 
    * asi por consecuencia ... rederizacion ... status ... init va prover como status inicial del reducer : asi renderizacion... noridicara a todos componentes 
   */ 
   useEffect(() => {
      localStorage.setItem( 'user', JSON.stringify( user ) );
   }, [user] )  // user dependencia para dispara efecto : ejuccucion del efecto 

 
  
    return (
       // este componente es lugar perfecto para el context de ... reducer  
       // que es lo voy a destrubuir a lo largo de mi app ? : es este objeto { user, dispatch }
       // si { user, dispatch } lo que voy a destrubuir con mi <AuthContext.Provider digamos asi : ahora tengo disponible obtener user o hacer dispatch a lo largo de mi app
       // recuerda este es el nivel mas alto de mi applicacion - pero el muy alto seria el index
       <AuthContext.Provider value={{ user, dispatch }}>
          <AppRouter />
       </AuthContext.Provider>
        
     
    )
}


