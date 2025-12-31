import { useState } from 'react'
import './App.css'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from './header/Header'
import Banner from './main/banner/Banner'
import OriginalProject from './main/section/OriginalProject'
import PersonalProject from './main/section/PersonalProjext'
import BootCamp from './main/section/BootCamp'

function App() {

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header />
      <main>
        <Banner />
        <OriginalProject />
        <PersonalProject />
        <BootCamp />
      </main>
    </Container>
    {/* <Landing /> */}
    </>
  )
}

export default App
