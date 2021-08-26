import React from 'react'
import Item from './Componentes/Item';
import Card from './Componentes/Card';


const App = () =>{
  return(
    <>
      <div className="container">
        <div className="d-flex flex-column">
          <div className="text-center mt-3" >
            <h1>Minha Aplicação React com a Dev Dio</h1>
          </div>

          <ul>
            <Item props="item 1" />   
            <Item props="item 2" />   
            <Item props="item 3" />   
          </ul>

          <Card />

        </div>
      </div>
    </>
  )
}


export default App;
