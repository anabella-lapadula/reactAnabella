import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';


function App(props) {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido!'/>
      

    </>
  )
}

export default App
