import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 

import Container from 'react-bootstrap/Container'
import { ItemList } from "./ItemList"

import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore"; 
  

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {id} = useParams()

    useEffect(() => {
    
        const db = getFirestore();

        let refCollection; 
        
        if (!id) refCollection = collection(db, "items");
        else {
            refCollection = query(collection(db, "items"), where("categoryId", "==", id))
        }
        getDocs(refCollection).then((snapshot) => {
            setProductos (   
            snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
        
        
        /*const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        get.then((data) => {
            if(id){
                const dataFiltrada = data.filter((data) => data.categoria === id)
                setProductos(dataFiltrada)
            } else {
                setProductos(data)
            }
        })*/
    }, [id])
    

    return (
        <Container className="mt-3 d-flex">
        <ItemList productos={productos}/> 
     </Container>
    )   
}