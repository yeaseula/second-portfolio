import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from './header/Header'
import Banner from './main/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header />
      <Banner />
    </Container>
    {/* <Landing /> */}
    </>
  )
}

export default App
