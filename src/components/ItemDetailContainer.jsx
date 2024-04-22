import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import Container from 'react-bootstrap/Container'
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        
        const db = getFirestore()

        const refDoc = doc(db, "items", id)

        getDoc(refDoc).then((snapshot) => {
            setProducto({ id: snapshot.id, ...snapshot.data() });
          })
    }, [id])

    if(!producto) return null 

    return (
        <Container className="mt-3">
            <ItemDetail producto={producto}/>
        </Container>
    )   
}