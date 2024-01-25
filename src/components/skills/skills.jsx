import styled from "styled-components";
import { SectionBtn } from "../hero/hero";
import {BiShapeSquare} from "react-icons/bi"
const Container=styled.div`
width:100%;
height:700px;
box-sizing:border-box;
padding-left: 30px;
position:relative;
top:50px;

    
`
const SkillHeader=styled.p`
font-size:55px;

    
`
const Colored=styled.span`
    color:var(--primary);
`
const Skills=()=>{
return(
    <Container>
        <SectionBtn Icon={BiShapeSquare} text="Skills"/>
    <SkillHeader>My <Colored>Specialties</Colored></SkillHeader>

    </Container>
)
}
export default Skills