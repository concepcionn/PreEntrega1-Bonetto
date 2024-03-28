import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const Item = (producto) => {
    return <Card >
    <Card.Img variant="top" src={producto.rutaImagen} />
    <Card.Body>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text>{producto.detalle}
      </Card.Text>
      <Card.Text>{producto.detalle}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}



