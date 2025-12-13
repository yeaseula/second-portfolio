import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from './header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header />
    </Container>
    {/* <Landing /> */}
    </>
  )
}

export default App
