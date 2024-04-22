import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

import carrito from "../assets/carrito.png"

export const CardWidget = () => {
     const { items } = useContext(CartContext)

     const totalCarrito = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0) 

     return (
          <Link to="/cart">
               <div id="carrito">
               <img src={carrito} alt="carrito de compras" height={25}/>
               <span>{totalCarrito}</span>
               </div>
          </Link>
     )
}
          
          
          


   
