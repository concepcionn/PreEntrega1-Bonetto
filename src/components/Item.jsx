import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return <Card key={producto.categoryId} style={{ flex: 1 }}>
    <Card.Img variant="top" src={producto.image} height="200" />
    <Card.Body>
      <Card.Title>{producto.title}</Card.Title>
      <Card.Text>{producto.description}
      </Card.Text>
      <Card.Text>{"$" + producto.price}
      </Card.Text>
      <Link to={`/item/${producto.categoryId}`}><Button variant="primary">{producto.name}</Button></Link>
    </Card.Body>
  </Card>
}



