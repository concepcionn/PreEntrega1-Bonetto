import { ItemCount } from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({producto}) => {
    const { addItem } = useContext(CartContext)

    const add = (quantity) => addItem(producto, quantity)

    return (
        <>
            <div>{producto.title}</div> 
            <img src={producto.imagen} alt={producto.title}/>
            <div>{producto.description}</div>
            <div>Stock: {producto.stock}</div>
            <ItemCount onAdd={add} stock={producto.stock}/>
        </>
    )
}