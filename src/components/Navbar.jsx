

import { CardWidget } from "./CardWidget"

export const Navbar = () => {
    return (
        <>
            <h1>BARO'S GOURMET</h1>
             <ul>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">products</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
            <CardWidget/>
        </>
    )        
}