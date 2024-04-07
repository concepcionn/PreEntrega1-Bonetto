import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 

import Container from 'react-bootstrap/Container'
import { ItemList } from "./ItemList"


import data from "../data/productos.json"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })

        get.then((data) => {
            if(id){
                const dataFiltrada = data.filter((data) => data.categoria === id)
                setProductos(dataFiltrada)
            } else {
                setProductos(data)
            }
        })
    }, [id])
    

    return (
        <Container className="mt-3 d-flex">
        <ItemList productos={productos}/> 
     </Container>
    )   
}