import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/Navbar'
import './App.css'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="Trabajamos para vos"/>
    </>
  )
}

export default App
