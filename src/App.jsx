import { Navigate } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./Container";
import Header from "../header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./project/Project";
import ProjectDetail from "./project/detail/ProjectDetail";
import AboutMe from "./aboutme/about";
import Teamwork from "./teamwork/teamwork";
import Skills from "./skills/skills";
import Activity from "./activity/activity";

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/introduce" replace />} />
              <Route path="introduce" element={<AboutMe />}></Route>
              <Route path="teamwork" element={<Teamwork />}></Route>
              <Route path="project" element={<Project />}></Route>
              <Route path="project/:id" element={<ProjectDetail />}></Route>
              <Route path="skills" element={<Skills />}></Route>
              <Route path="activity" element={<Activity />}></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </AnimatePresence>
      {/* <Landing /> */}
    </>
  );
}

export default App;
