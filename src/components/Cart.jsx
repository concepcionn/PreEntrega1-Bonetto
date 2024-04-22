import Container from 'react-bootstrap/Container'
import { useContext, useState } from 'react'
import {
    getFirestore,
    getDoc,
    doc,
    updateDoc,
    collection,
    getDocs,
    query,
    where,
    limit,
    addDoc,
  } from "firebase/firestore";
  
import { CartContext } from "../contexts/CartContext"

export const Cart = () => {
    const initialValues = {
        name: "",
        phone: "",
        email: "",
    }

    const [buyer, setBuyer] = useState(initialValues)

    const { clear, items, removeItem } = useContext(CartContext)

    const handleChange = (ev) => {
        const {name, value} = ev.target

        setBuyer((prev) => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }
  
    const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0)

    const handleOrder = () => {
        const order = {
          buyer,
          items,
          total,
        }
    }

    const db = getFirestore()
    
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!")
      }
    })
 
    return (
    <Container className='mt-1'>
        <h1>Mi orden</h1>
        <table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>
            {items.map(item => 
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                    <button onClick={() => removeItem(item.id)}>
                        Eliminar produto
                    </button>
                </td>
            </tr>
            )}
            </tbody>
        </table>

        <h2>Tus datos</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" value={buyer.name} name='name' onChange={handleChange} />
            </div>
            <div>
                <label>Teléfono</label>
                <input type="number" value={buyer.phone} name='phone' onChange={handleChange} />
            </div>
            <div>
                <label>Correo electrónico</label>
                <input type="email" value={buyer.email} name='email' onChange={handleChange} />
            </div>
        </form>

        <button type='button' onClick={handleOrder}></button>
        
    </Container>
  )
}
