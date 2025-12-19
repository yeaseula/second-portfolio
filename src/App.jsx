import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from './header/Header'
import Banner from './main/banner/Banner'
import FirstProject from './main/section/FirstProject'

function App() {

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header />
      <Banner />
      <FirstProject />
    </Container>
    {/* <Landing /> */}
    </>
  )
}

export default App
