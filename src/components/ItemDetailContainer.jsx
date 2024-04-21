import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import Container from 'react-bootstrap/Container'
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        get.then((data) => {
            
                const dataFiltrada = data.find((data) => data.id === Number(id))
                setProducto(dataFiltrada)
           
        })

/*const db = getFirestore();

const refDoc = doc(db, "items", id);

getDoc(refDoc).then((snapshot) => {
  console.log({ id: snapshot.id, ...snapshot.data() });
});*/

    }, [id])

    if(!producto) return null 
    

    return (
        <Container className="mt-3">
            <div>{producto.nombre}</div> 
            <img src={producto.rutaImagen} alt={producto.nombre}/>
     </Container>
    )   
}