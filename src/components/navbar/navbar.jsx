import styled from "styled-components"
import { CgHome, CgHello } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { BiShapeSquare } from "react-icons/bi";
import { PiVinylRecordBold } from "react-icons/pi";
import { SlSpeech } from "react-icons/sl";
// import { Nav,Anc } from "../hero/hero";
const Iconslist = [
  { Icon: CgHome, path: "#home" },
  { Icon: RxAvatar, path: "#about" },
  { Icon: BsBriefcase, path: "#resume" },
  { Icon: GrServices, path: "#services" },
  { Icon: BiShapeSquare, path: "#skills" },
  { Icon: PiVinylRecordBold, path: "#portfolio" },
  { Icon: SlSpeech, path: "#testimonial" },
  { Icon: CgHello, path: "#contact" },
];

export const Nav = styled.div`
  height: 350px;
  width: 60px;
  border-radius: 20px;
  border: 1px solid rgb(255, 255, 255, 0.7);
  position: fixed;
  right: 28px;
  top:150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;
export const Anc = styled.a`
  color: rgb(255, 255, 255, 0.7);
  position: relative;
  display: flex;
  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    left: -130px;
    text-transform: capitalize;
    width: 100px;
    height: 30px;
    background-color: var(--overlay);
    box-sizing: border-box;
    padding-left: 10px;
    border-radius: 7px;
    opacity: 0;
    transition: all 0.5s linear;
    display: flex;
    align-items: center;
    z-index: 4;
  }
  &:hover:after {
    opacity: 0.8;
    color: white;
  }
`;

const NavBar = () =>{
return(
    <Nav>
        {Iconslist.map(ic=>{
            const {Icon, path}=ic
            return(
                <Anc href={path} text={path.substring(1)}>
                    <Icon/>
                </Anc>
            )
        })}
    </Nav>
)
}
export default NavBar
