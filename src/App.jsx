import { useState } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from './header/Header'

import Banner from './banner/Banner'
import OriginalProject from './project/OriginalProject'
import PersonalProject from './project/PersonalProject'

import BootCamp from './bootcamp/BootCamp'

function App() {

  return (
    <>
    <GlobalStyle />
    <AnimatePresence>
    <Container>
      <Header />
      <main>
        <Banner />
        <OriginalProject />
        <PersonalProject />
        <BootCamp />
      </main>
    </Container>
    </AnimatePresence>
    {/* <Landing /> */}
    </>
  )
}

export default App
