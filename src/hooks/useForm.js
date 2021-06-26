import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState( initialState );
   // console.log(values)

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        //console.log(target.name)
        //console.log(target.value)
        setValues({
            ...values, // en este caso se mantiene la prop searchText => nombre del input 
            [ target.name ]: target.value // target.name es = searchText - su value es valor emitido del mismo - se cae encima - asi values retuturna searchText con el valor emetido del input del form
        });

    }

    return [ values, handleInputChange, reset ];

} // este custom hook - lo que hace - solo llevar control del estado de los inputs que los forms que lo usan .