import { Item } from "./Item"


export const ItemList = ({productos}) => {
    return <div className="d-flex flex-wrap w-100" >
                {productos.map((producto => <Item key={producto.id} producto={producto}/> 
                ))}
            </div>
}