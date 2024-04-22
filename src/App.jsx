import {BrowserRouter, Routes, Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from './components/Navbar'
import './App.css'
import { Cart } from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={404}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
