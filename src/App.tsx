import { StyleSheetManager } from 'styled-components'
import './App.css'
import Inicio from './assets/Components/Inicio'


function App() {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen' && prop !== 'isAnimating'}>
    <Inicio/>

    </StyleSheetManager>
  )
}

export default App
