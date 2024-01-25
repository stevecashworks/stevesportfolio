import {useState,useEffect} from "react"
import styled from "styled-components";
import { CgHome, CgHello } from "react-icons/cg";
import { FaEquals, FaLongArrowAltDown } from "react-icons/fa";

import roundtext from "../../assets/round-text.png"
import back from "../../assets/back.mp4"
import "./hero.css"
 const Container = styled.div`
  width: 100%;
  position: relative;
  height: 1000px;;
  /* overflow-x: hidden; */
  z-index: 5;
`;

const Btn=styled.button`
 width:180px;
 height:40px;
 border-radius:10px;
 border:1px solid white;   
 display:flex;
 align-items: center;
 justify-content: center;
 background:transparent;
 gap:20px;
`
export const Background=styled.video`
    width:100%;
    height:100%;
    object-fit: cover;
    position:absolute;
    top:0;
    left:0;
`
const Blur=styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgb(0,0,0,0.9);
z-index:1;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index:2;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding-left:40px;
`;
const Tagline=styled.p`
position:relative;
top:20px;
/* background-color:rgb(0,0,0,0.9); */
width:fit-content;
font-size:18px;
color:rgb(255,255,255);
font-weight:400;
`
const InnerContent=styled.div`
  
  height:100%;
  width: 100%;
`
const Img=styled.img`
  position:absolute;
  animation:spin  10s linear infinite;
  @keyframes spin{
    from{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(360deg)
    }
  }
`
const HeroTop=styled.div`
width:100%;
padding:30px;
box-sizing:border-box;
display:flex;
justify-content: space-between;
margin-top: 20px;
`
const NavBtnCon=styled.div`
  width:45px;
  height:45px;
  border:1px solid white;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position:relative;
  right:20px;
`

export const Greeting=styled.div`
  font-size:55px;
  font-weight:400;
`
const Colored= styled.span`
color:var(--primary);
&:after{
  content:" |";
  opacity:0.5;
  font-weight:400;
  animation:fade 0.5s linear infinite;
  @keyframes fade{
    from{
      opacity:0;
    }
    to{
      opacity:0.5
    }
  }
}
  
`
const BallCon=styled.a`
display:flex;
justify-content:flex-end;
width:87%;
position:relative;
top:90px;
color:white;
&:hover{
  color:white;
}

`
const Ball=styled.div`
  height:160px;
  width:160px;
  display:flex;
  align-items:center;
  position:relative;
  justify-content: center;
  border:1px solid white;
  border-radius: 50%;
  bottom:70px;
`
const Achievements=styled.div`
width:40%;
display:flex;
justify-content:space-between;
position:relative;
top:140px;
/* background-color:rgb(0,0,0,0.9); */
overflow-x:hidden;
`
const Achievement=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const AchievementValue=styled.p`
  font-size:55px;
  color:var(--primary);
  padding:0;
  margin:0;
`
const AchievementText=styled.p`
  padding:0;
  margin:0;
`

export const SectionBtn= ({Icon, text})=>{
    return (
      <Btn>
        <Icon style={{ margingRight: "5px" }} />
        <span>{text}</span>
      </Btn>
    );
}

const Hero = () => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const writeInterval = setInterval(() => {
      setLength((prevLength) => {
        if (prevLength > 20) {
          return 0;
        } else {
          return prevLength + 1;
        }
      });
    }, 100);

    // observe element
    const Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
          } else {
            entry.target.classList.remove("visible");
            
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    const targets = document.querySelectorAll(".ach");
    console.log(targets);
    targets.forEach((target) => {
      Observer.observe(target);
    });

    return () => {
      clearInterval(writeInterval);
      targets.forEach((target) => {
        Observer.unobserve(target);
      });
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const text = "Stevecashworks";
  return (
    <Container>
      <Background src={back} autoPlay loop muted>
      </Background>
        <Blur/>
      <Content>
        <InnerContent>
          <HeroTop>
            <SectionBtn Icon={CgHome} text="Introduction" />
            <NavBtnCon>
              <FaEquals />
            </NavBtnCon>
          </HeroTop>
         
          <Greeting>
            Hello from <Colored>{text.substring(0, length)}</Colored>
            <br />
            A Software Engineer and <br />
            Tech Enthusiast
          </Greeting>
          <Tagline>
            I create beautiful and efficient solutions for all your tech needs
          </Tagline>
          <BallCon href="#portfolio">
            <Ball>
              <Img src={roundtext} />
              <FaLongArrowAltDown style={{ fontSize: "30px" }} />
            </Ball>
          </BallCon>
          <Achievements className="ach">
            <Achievement className="ach1">
              <AchievementValue>80+</AchievementValue>
              <AchievementText>Sucessful Projects</AchievementText>
            </Achievement>
            <Achievement className="ach2">
              <AchievementValue>65+</AchievementValue>
              <AchievementText>Satisfied clients</AchievementText>
            </Achievement>
          </Achievements>
        </InnerContent>
      </Content>
    </Container>
  );
}
export default Hero