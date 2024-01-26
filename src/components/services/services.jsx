import styled from "styled-components"
import {GrServices} from "react-icons/gr"
import {SectionBtn} from "../hero/hero.jsx"
import ServiceCon from "./serviceCon.jsx"
import {MdDeviceHub} from "react-icons/md"
import {CiMobile1} from "react-icons/ci"
import {IoBugOutline} from "react-icons/io5"

const Container=styled.div`
    height:auto;
    width:100%;
    position:relative;
    top:40px;
    box-sizing:border-box;
    padding: 60px;
`

const ServiceHeader=styled.p`
font-size:55px;
`
const Colored=styled.span`
    color:var(--primary);
`
const ServicesCon=styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap:30px;
    
`
const serviceList = [
  {
    Name: "Web Development",
    txt: "Responsive and functional web applications for your brand",
    Icon: MdDeviceHub,
  },
  {
    Name: "Mobile Development",
    txt: "Responsive and functional mobile applications for your brand",
    Icon: CiMobile1,
  },
  {
    Name: "Bugs Fixing",
    txt: "Responsive and functional mobile applications for your brand",
    Icon: IoBugOutline,
  },
];
const Services=()=>{
return(
    <Container id="services">
        <SectionBtn Icon={GrServices} text="Services"/>
        <ServiceHeader>My <Colored>Services</Colored> </ServiceHeader>
        <ServicesCon>
            {serviceList.map(item=><ServiceCon {...item}/>)}
        </ServicesCon>
    </Container>
)
}

export default Services