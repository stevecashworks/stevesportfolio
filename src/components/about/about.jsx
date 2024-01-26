import styled from "styled-components"
import  {useEffect} from "react";
import { Content,SectionBtn,} from "../hero/hero";
import { RxAvatar } from "react-icons/rx";
import handleIntersection from "../../functions/handleIntersection";
import "./about.css"
const AboutHead=styled.div`
margin-top:30px;
font-size:24px;
width:600px;
`
const Container = styled.div`
  width: 100%;
  position: relative;
  height: 600px;
  /* overflow-x: hidden; */
  z-index: 5;
`;
const AboutIntro=styled.p`
width:500px;
position:relative;
top:40px;
line-height: 30px;
font-size:18px;
`
const AboutText=styled.p`
  width:600px;
  position: relative;
  top:60px;

`
const Colored=styled.span`
    color:var(--primary);
`
const About = () =>{
  useEffect(()=>{
    const observer= new IntersectionObserver(handleIntersection,{root:null})
    const  observables= document.querySelectorAll(".aboutContent")
    observables.forEach(element=>{
      observer.observe(element)
    })
    return()=>{
      observables.forEach(element=>{
        observer.unobserve(element)
      })
    }
    
  })
    return (
      <Container style={{  height:"600px" }} id="about">
        {/* <Background src={backvid} autoPlay loop muted></Background> */}
        <Content className="aboutContent" style={{ paddingTop: "30px", boxSizing: "border-box",marginTop:"60px" }}>
          <SectionBtn className="aboutBtn"
            style={{ width: "100px", marginTop: "40px;" }}
            Icon={RxAvatar}
            text="about"
          />
          <AboutHead className="aboutHead">About Me:</AboutHead>
          <AboutIntro className="aboutIntro">
            Welcome to my digital realm, where <Colored>lines of code </Colored>
            dance to create seamless and innovative solutions!
          </AboutIntro>
          <AboutText className="aboutText">
            I am  Steve, a passionate and dedicated software engineer on a
            mission to transform ideas into powerful applications. With a love
            for clean code and an insatiable curiosity for emerging
            technologies, I embark on a journey to craft digital experiences
            that not only meet but exceed expectations. Join me as I showcase my
            expertise, share my coding adventures, and invite you to explore the
            intersection of creativity and technology within my portfolio.
            Welcome to a world where innovation meets execution, and every click
            tells a story of problem-solving and ingenuity.
          </AboutText>
        </Content>
      </Container>
    );
}
export default About