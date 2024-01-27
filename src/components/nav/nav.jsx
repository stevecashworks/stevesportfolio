import styled from "styled-components";
import steve from "../../assets/steve.png"
import { mobile } from "../../responsive";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const LeftCon = styled.div`
  width: 400px;
  box-sizing: border-box;
  height: 100%;
  position:fixed;
  ${mobile(`
     left:0;
     height:auto;
     top:20px;
     width:100vw;
     position:relative;
  `)}
  
`;
const NavCon=styled.div`
height:100%;
width:350px;
border:1px solid rgb(255,255,255,0.4);
border-radius:40px;
left:50px;
position:relative;
padding-top:40px;
box-sizing:border-box;
${mobile(`
    left:10px;
    width:90vw;
    height: 700px;
`)}

    
`
const NavTop=styled.div`
width:90%;
display:flex;
margin:5px auto;
justify-content:space-between;
`
const Logo=styled.div`
font-size:22px;
font-weight:600;
position:relative;
display:flex;
&:after{
    display:flex;
    align-items:center;
    content:"S";
    font-size:8px;
    height: 15px;
    width:15px;
    justify-content:center;
    border:1px solid white;
    border-radius:50%;
    opacity:0.9;
    position:absolute;
    right:-20px;
    

}
    
`
const TagLine=styled.div`
    width:120px;
    font-size:12px;
    ${mobile(`
        display:none;
    `)}
`
const ImageCon=styled.div`
height:200px;
width:250px;
margin:40px auto;
border-radius:10px;
background-color:rgb(255,255,255,0.6);

`
const Img=styled.img`
    width:85%;
    height:100%;
    object-fit:cover;
`
const Title=styled.div`
font-weight:600;
text-align:center;
font-size: 20px;
    
`
const Position=styled.p`
text-align:center;
opacity:0.8;
    
`
const Btn = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: var(--dark-primary);
  width:90%;
  height:40px;
  border-radius: 10px;
  margin:20px auto;
`;
const Socials=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`
const IconCon=styled.a`
width:40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
color:rgb(255,255,255,0.6);
border:1px solid rgb(255,255,255,0.5);
border-radius:50%;
transition:all 0.5s ease;
&:hover{
    transform:translateY(-20px);
}
`

const IconList = [
  { Icon: FaFacebook, path: "" },
  { Icon: FaLinkedinIn, path: "" },
  { Icon: FaInstagram, path: "" },
  { Icon: FaGithub, path: "" },
  { Icon: FaTwitter, path: "" },
];




const Nav= () => {
    return(
        <LeftCon>
            <NavCon>
                <NavTop>
                    <Logo>
                        Steve Tech
                    </Logo>

                    <TagLine>Top notch development services, just for you</TagLine>
                </NavTop>
                <ImageCon>
                    <Img src={steve}/>
                </ImageCon>
                <Title>
                    Stevecashworks
                </Title>
                <Position>Software Engineer and CEO of Steve Tech</Position>
                <Socials>
                {IconList.map(icon=>{
                    const {Icon}=icon
                    return(
                        <IconCon href="path">
                            <Icon></Icon>
                        </IconCon>
                    )

                })}
                </Socials>
                <Btn>Hire Me !</Btn>
            </NavCon>
        
        </LeftCon>
    )
}
export default Nav