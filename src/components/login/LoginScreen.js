import React from 'react'




/* 
 * si vez al arbol - vas a encontrar los props que tenemos por defecto 
 * no olvidar que este componente renderizado atraves de un componente router : ver arbol
 * asi usamos la desestructuracion para extraer history  ; ver prop en el arbol 
 *
*/
export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        /* son cosa del router para navigar  */
        // history.push('/'); // permite precedent 
         history.replace('/'); // no permite perecendent 
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
