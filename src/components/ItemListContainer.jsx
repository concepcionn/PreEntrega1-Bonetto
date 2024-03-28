import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import { ItemList } from "./ItemList"


import data from "../data/productos.json"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        get.then((data) => setProductos(data))
    }, [])


    

    return (
        <Container className="mt-3">
        <ItemList productos={productos}/> 
     </Container>
    )   
}