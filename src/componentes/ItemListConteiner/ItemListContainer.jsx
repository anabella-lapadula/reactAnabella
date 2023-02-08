import { useState } from "react"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]= useState([])
const [loading, setLoading] = useState(true)



  useEffect(()=>{
    gFetch()
    .then( res=>{  setProductos(res) }  )
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
  }, [] )

 console.log(productos)

  return (
    <center> 
         { loading ? <h2> Cargando...</h2>

         :
         
         productos.map(producto => 
                    <Card  key ={producto.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                        <Card.Title>Nombre: {producto.nombre}</Card.Title>
                        <Card.Text>precio: {producto.precio}
                        </Card.Text>
                        <Button variant="primary">Agregar al Carrito</Button>
                      </Card.Body>
                    </Card>
          
          )} 
     </center>
  )
}


export default ItemListContainer