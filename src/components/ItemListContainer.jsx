import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore"
import Container from 'react-bootstrap/Container'
import { ItemList } from "./ItemList"


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
    
        const db = getFirestore()

        let refCollection
        
        if (!id) refCollection = collection(db, "items");
        else {
            refCollection = query(collection(db, "items"), where("categoryId", "==", id))
        }
        getDocs(refCollection).then((snapshot) => {
            setProductos (   
            snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
        ).finally(() => setLoading(false) )
    })
    }, [id])
    
    if(loading) return <div>Loading...</div>

    return (
        <Container className="mt-3 d-flex">
        <ItemList productos={productos}/> 
     </Container>
    )   
}