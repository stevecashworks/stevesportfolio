import styled from "styled-components";
import "./app.css";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import NavBar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import { mobile } from "./responsive";

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background-color: var(--greyish);
  height: 5000px;
  box-sizing: border-box;
`;
const Content = styled.div`
  width: calc(100vw - 400px);
  position: relative;
  left: 400px;
  overflow-x: hidden;
  height: 100%;
  ${mobile(`
    left:0;
    width:100vw;
    top:30px;
  `)}
`;
function App() {
  return (
    <Container>
      <Nav />
      <Content>
        <NavBar />
        <Hero />
        <About />
        <Resume />
        <Services />
        <Projects />
        <Skills />

        <Contact />
      </Content>
    </Container>
  );
}

export default App;
