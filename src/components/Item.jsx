import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return <Card >
    <Card.Img variant="top" src={producto.rutaImagen} />
    <Card.Body>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text>{producto.detalle}
      </Card.Text>
      <Card.Text>{producto.detalle}
      </Card.Text>
      <Link to={`/item/${producto.id}`}><Button variant="primary">{producto.name}</Button></Link>
    </Card.Body>
  </Card>
}



