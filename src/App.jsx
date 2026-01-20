import { useState } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import Landing from './Landing'
import { GlobalStyle } from './GlobalStyle'
import Container from './Container'
import Header from '../header/Header'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Banner from './banner/Banner'
import OriginalProject from './project/OriginalProject'
import PersonalProject from './project/PersonalProject'
import AboutMe from './aboutme/about'
import Teamwork from './teamwork/teamwork'
import BootCamp from './bootcamp/BootCamp'

function App() {

  return (
    <>
    <GlobalStyle />
    <AnimatePresence>
      <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/introduce' element={<AboutMe />}></Route>
          <Route path='/teamwork' element={<Teamwork />}></Route>
          <Route path='/' element={<OriginalProject />}></Route>
          <Route path='/activity' element={<BootCamp />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
    </AnimatePresence>
    {/* <Landing /> */}
    </>
  )
}

export default App
