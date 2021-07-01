import React from 'react';
import ReactDOM from 'react-dom';

import { HeroesApp } from './HeroesApp';


/* aqui siempre intentamos dejarlo lo mas limpio possible 
 * es la configuracion principal de mi applicacion
 * Este componnete siempre se va ejecutarse : tambien se puede poner context de mi Reducer pero por :
 * el motivo de dejar esta parte mas limpia posible - paso al sbcomponente principal : HeroesApp
*/
ReactDOM.render(
 
  <HeroesApp />,
  document.getElementById('root')
  

);

