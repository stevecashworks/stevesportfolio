import styled  from "styled-components";
const Container = styled.div`
  width: 500px;
  height: 150px;
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255, 0.6);
  margin-bottom: 25px;

  &:hover {
    border: 1px solid var(--primary);
  }
`;
const ServiceConTop=styled.div`
    display:flex;
    width:100%;
    padding:0 20px;
    box-sizing:border-box;
    justify-content:space-between;
    align-items: center;
`
const SkillName=styled.p`
font-size:30px;

`
const SkillText=styled.p`
box-sizing: border-box;
position: relative;
left:20px;
bottom:20px;
color:rgb(255,255,255,0.8);

`

const ServiceCon= ({Name, Icon, txt}) =>{
    return(
        <Container>
            <ServiceConTop>
                <SkillName>{Name}</SkillName>
                <Icon  style={{color:"var(--primary)",fontSize:"30px"}}/>

            </ServiceConTop>
            <SkillText>
                {txt}
            </SkillText>
        </Container>
    )
}
export default ServiceCon