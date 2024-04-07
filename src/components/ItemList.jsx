import { Item } from "./Item"


export const ItemList = ({productos}) => {
    return <div className="d-flex">
                {productos.map((producto => <Item key={producto.id} producto={producto}/> 
                ))}
            </div>
}