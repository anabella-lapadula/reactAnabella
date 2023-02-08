import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { gFetch } from '../../utils/gFetch';

export const ItemDetailConteiner=()=>{

    gFetch.map(producto => 
        <Card  key ={producto.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
            <Card.Title>Nombre: {producto.nombre}</Card.Title>
            <Card.Text>precio: {producto.precio}
            </Card.Text>
            <Button variant="primary">Agregar al Carrito</Button>
          </Card.Body>
        </Card>)
}