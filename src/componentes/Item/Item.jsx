import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <Card  style={{ width: '18rem' }}>             
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                        <Card.Title>Nombre: {producto.nombre}</Card.Title>
                        <Card.Text>precio: {producto.precio}
                        </Card.Text>
                        <Link to={`/detalle/${producto.id}`}>   <Button variant="primary">Detalle</Button></Link>
          
                      </Card.Body>
     </Card>         
    
  )
}

export default Item