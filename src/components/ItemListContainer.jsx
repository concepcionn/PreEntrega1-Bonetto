import Container from 'react-bootstrap/Container'

export const ItemListContainer = (props) => {
    return (
       <Container className="mt-3">
            <h2>
                {props.greetings}
            </h2>
       </Container> 
    )   
}