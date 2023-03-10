import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  return (
  <BrowserRouter>
    <NavBar/>
    <Routes> 
              <Route path='/' element={<ItemListContainer greeting='Bienvenido!'/>}/> 
              <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenido!'/>}/>    
              <Route  path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={ <CartContainer/>} />
              <Route path='*' element={ <Navigate to='/'/> } />
      </Routes>
{ /*    <ItemCount/>*/}
  </BrowserRouter>
  )
}

export default App
