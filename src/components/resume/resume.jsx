import styled from "styled-components"
import { useEffect } from "react"
import handleIntersection from "../../functions/handleIntersection"
import  {SectionBtn} from "../hero/hero"
import { BsBriefcase} from "react-icons/bs"
import "./resume.css"
const Container=styled.div`
width:100%;
height:700px;
height:auto;
box-sizing: border-box;
padding:50px;
position:relative;
top:70px;
    
`
const Colored=styled.span`
    color:var(--primary);
`
const ResumeHeader=styled.p`
    font-size:50px;
    
`
const ResumCon=styled.div`
`
const  ResumeDate=styled.div`
 color:rgb(255,255,255,0.6);
 transition:all 0.5s linear;
`
const ResumeGroup=styled.div`
    box-sizing: border-box;
    border-left: 1px solid rgb(255,255,255,0.6);
    height:250px;
    width:300px;
    padding-left:50px;
    position:relative;
    
`
const Dot=styled.div`
    position:absolute;
    z-index:5;
    height:10px;
    width:10px;
    border-radius: 50%;
    background-color:rgb(255,255,255,0.8);
    left:-5px;
    top:5px;
    transition:all 0.5s linear;
`
const ResumeItem=styled.div`
    margin:20px 0;
`
const ResumeItemTitle=styled.p`
    font-size:20px;
    font-weight:600;

`
const ResumeItemVal=styled.p`
    color:rgb(255,255,255,0.5);
`
const Resume= ()=>{
    useEffect(()=>{
        const observer=  new IntersectionObserver(handleIntersection,{root:null})
        const observables=document.querySelectorAll(".resumeGroup")
        observables.forEach(group=>{
            observer.observe(group)
        })
        return ()=>{
            observables.forEach(group=>{
                observer.unobserve(group)
            })
        }
    })
    return (
      <Container>
        <SectionBtn Icon={BsBriefcase} text={"Resume"} />
        <ResumeHeader>
          Education & <Colored>Experience</Colored>
        </ResumeHeader>
        <ResumCon>
          <ResumeGroup className="resumeGroup">
            <Dot className="dot" />
            <ResumeDate className="resumeDate"> 2020 - Present</ResumeDate>
            <ResumeItem>
              <ResumeItem>Full-Stack Web Developer</ResumeItem>
              <ResumeItemVal>Starmetaverse</ResumeItemVal>
            </ResumeItem>

            <ResumeItem>
              <ResumeItem>Machine Learning Student</ResumeItem>
              <ResumeItemVal>Kaggles</ResumeItemVal>
            </ResumeItem>
          </ResumeGroup>

          <ResumeGroup className="resumeGroup">
            <ResumeDate className="resumeDate"> 2019 - 2020</ResumeDate>
            <Dot className="dot" />
            <ResumeItem>
              <ResumeItem>Backend Developer</ResumeItem>
              <ResumeItemVal>Freelance</ResumeItemVal>
            </ResumeItem>

            <ResumeItem>
              <ResumeItem>Full Stack Development Student</ResumeItem>
              <ResumeItemVal>FreecodeCamp</ResumeItemVal>
            </ResumeItem>
          </ResumeGroup>
          <ResumeGroup style={{height:"150px"}} className="resumeGroup">
            <ResumeDate className="resumeDate"> 2011 - 2017</ResumeDate>
            <Dot className="dot" />
            <ResumeItem>
              <ResumeItem>General Certification Exams, G.C.E</ResumeItem>
              <ResumeItemVal>Iju Senior School, Lagos Nigeria.</ResumeItemVal>
            </ResumeItem>

            
          </ResumeGroup>
        </ResumCon>
      </Container>
    );
}
export default Resume