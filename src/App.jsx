import 'bootstrap/dist/css/bootstrap.min.css';

import { ItemListContainer } from './components/ItemListContainer'
import { Navbar } from './components/Navbar'
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greetings="Trabajamos para vos"/>
    </>
  )
}

export default App
