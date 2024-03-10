import { Navbar } from './components/Navbar'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'

function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greetings="hi"/>
    </>
  )
}

export default App
