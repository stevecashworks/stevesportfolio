import styled from "styled-components";
import { SectionBtn } from "../hero/hero";
import {BiShapeSquare} from "react-icons/bi"
import {useEffect} from "react"
import kali from "../../assets/logo/kali-linux.png"
import nodeLogo from "../../assets/logo/nodejs.png"
import python from "../../assets/logo/python.png"
import react from "../../assets/logo/react.png"
import solidity from "../../assets/logo/solidity.png"
import wordpress from "../../assets/logo/wordpress.png"
import handleIntersection from "../../functions/handleIntersection"
import "./skills.css"
const logoList=[
    {text:"Wordpress",img:wordpress},
    {text:"React",img:react},
    {text:"Python",img:python},
    {text:"Solidity",img:solidity},
    {text:"Nodejs",img:nodeLogo},
    {text:"Kali linux", img:kali}
]
const Container=styled.div`
width:100%;
height:900px;
box-sizing:border-box;
padding-left: 30px;
position:relative;
top:50px;

    
`
const SkillHeader=styled.p`
font-size:55px;


`
const SkillsCon=styled.div`
    width:80%;
    flex-wrap:wrap;
    display:flex;
    gap:40px;
    justify-content:center;
    `
const SkillCon=styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width:200px;
    height:220px;
    border-radius: 80px;
    border: 1px solid rgb(255,255,255,0.5);
    flex-direction:column;
    `
const Colored=styled.span`
    color:var(--primary);
    `
    const SkillText=styled.p`
        
    `

const Skills=()=>{
  useEffect(()=>{
    const observer= new IntersectionObserver(handleIntersection,{root:null})    
  
    const observables=document.querySelectorAll(".moveUp,.moveDown,.moveLeft,.moveRight")
    console.log(observables)
    observables.forEach(observable=>{
      observer.observe(observable)
    })
    return ()=>{
      observables.forEach((observable) => {
        observer.unobserve(observable);
      });
    }    
  
  })
return(
    <Container id="skills">
        <SectionBtn Icon={BiShapeSquare} text="Skills"/>
    <SkillHeader>My <Colored>Specialties</Colored></SkillHeader>
        <SkillsCon>
        {logoList.map((logo,index)=>{
        let className=""
        switch (index) {
          case 3:
            className = "moveRight";
            break;
          case 0:
            className = "moveRight";
            break;
          case 2:
            className = "moveLeft";
            break;
          case 5:
            className = "moveLeft";
            break;
          case 1:
            className = "moveDown";
            break;
          case 4:
            className = "moveUp";
          default:
            break;
        }

            return(
                <SkillCon className={className}>
                    <img src={logo.img} />
                    <SkillText>{logo.text}</SkillText>
                </SkillCon>
            )
        })}
        </SkillsCon>
    </Container>
)
}
export default Skills