import styled from "styled-components"
import { SectionBtn } from "../hero/hero"
import {CgHello} from "react-icons/cg"
import {MdOutlineCloudUpload} from "react-icons/md"
import { useEffect } from "react"
import "./contact.css"
import getContactDetails from "./getContactDetails"
import handleIntersection from "../../functions/handleIntersection"
const Container=styled.div`
    height:700px;
    width:100%;
    padding-left:50px;

`
const ContactHeader=styled.div`
font-size:50px;
box-sizing:border-box;
margin:30px 0;

    
`


const Colored=styled.span`
color:var(--primary);
`
const Email=styled.p`
    font-size:20px;
    color:rgb(255,255,255,0.6);
`
const Form=styled.form`
    width:800px;
    height:600px;
    background-color:rgb(0,0,0,0.1);
    box-sizing: border-box;
    padding:20px;
    
`
const InputFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const HalfInput=styled.div`
width:300px;
margin: 20px 0;

    
`
const Label=styled.label`
display:flex;
align-items:center;
cursor:pointer;
    
`
const Hr=styled.hr`
margin:30px auto;
`
const Input=styled.input`
width:100%;
display:block;
color:white;
background-color:transparent;
height:30px;
margin:20px 0;
border:none;
outline: none;


`
const S = styled.span`
  color: var(--brownish);
  font-size:20px;
`;
const SendBtn=styled.button`
    color:white;
    background-color: var(--primary);
    width:300px;
    height:40px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-top:40px;
`
const Contact=()=>{
  const handleSubmit=(e)=>{
    e.preventDefault();
    getContactDetails(e.target)
  }
    useEffect(()=>{
        const observables=document.querySelectorAll(".formCon > div")
        const observer=new IntersectionObserver(handleIntersection)
        observables.forEach(observable=>{
            observer.observe(observable)
        })
        return ()=>{
            observables.forEach(observable=>{
                observer.unobserve(observable)
            })
        }
    })
    return (
      <Container id="contact" >
        
        <SectionBtn Icon={CgHello} text="Contact" />
        <ContactHeader>
          Let's Keep In <Colored>touch </Colored>!
        </ContactHeader>
        <Email>chigbustephennamdi@gmail.com</Email>
        <Form onSubmit={handleSubmit} className="formCon">
          <InputFlex>
            <HalfInput>
              <Label htmlFor="name">
                Name <S>*</S>
              </Label>
              <Input name="name" id="name" placeholder="Your Full Name"></Input>
            </HalfInput>

            <HalfInput>
              <Label htmlFor="email">
                Email <S>*</S>
              </Label>
              <Input name="email" id="email" placeholder="Your Email"></Input>
            </HalfInput>
          </InputFlex>
          <InputFlex>
            <HalfInput>
              <Label htmlFor="phone">
                Phone <S>*</S>
              </Label>
              <Input name="phone" id="phone" placeholder="Your Full Name"></Input>
            </HalfInput>

            <HalfInput>
              <Label htmlFor="subject">
                Subject <S>*</S>
              </Label>
              <Input name="subject" id="subject" placeholder="Your Email"></Input>
            </HalfInput>
          </InputFlex>
          <HalfInput>
            <Label htmlFor="budget">Your Budget (Optional)</Label>
            <Input name="budget" placeholder="Let's work with your budget"></Input>
          </HalfInput>
          <HalfInput>
            <Label>Your Message</Label>
            <Input name="message"  placeholder="Your Message"></Input>
          </HalfInput>
          <Hr />
          <Label htmlFor="attachment">
            <MdOutlineCloudUpload style={{ marginRight: "10px" }} /> Add An
            Attachment
          </Label>
          <Input name="attachement" id="attachment" type="file" style={{ display: "none" }} />
          <SendBtn >Send Message</SendBtn>
        </Form>
      </Container>
    );
}
export default Contact