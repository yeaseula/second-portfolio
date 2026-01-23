import { useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./Container";
import Header from "../header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./banner/Banner";
import Project from "./project/Project";
import ProjectDetail from "./project/detail/ProjectDetail";
import AboutMe from "./aboutme/about";
import Teamwork from "./teamwork/teamwork";
import BootCamp from "./bootcamp/BootCamp";
import Skills from "./skills/skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path="/introduce" element={<AboutMe />}></Route>
              <Route path="/teamwork" element={<Teamwork />}></Route>
              <Route path="/" element={<Project />}></Route>
              <Route path="/detail/:id" element={<ProjectDetail />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </AnimatePresence>
      {/* <Landing /> */}
    </>
  );
}

export default App;
