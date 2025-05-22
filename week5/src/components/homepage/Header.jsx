import styled from 'styled-components';
import IDT from '../../assets/images/IDT.svg';
import { Link } from "react-router";


function Header(){
    return(
        <Container>
            <Img src={IDT}/>
            <Category>
                <Page to='/'>About</Page>
                <Page to='/project'>Project</Page>
                <Page to='/diary'>Diary</Page>
                <Page>QnA</Page>
            </Category>
            
        </Container>
    )
}

const Page = styled(Link)`
    font-size:18px;
    color:#363636;
    text-decoration:none;
`

const Container = styled.div`
    display:flex;
    height:100px;

`
const Img = styled.img`
    width: 115px;
    height: 67px;
    margin: 40px 70px;
`
const Category = styled.div`
  display: flex;
  gap: 60px;
  margin: 40px 700px;
  width: 1920px;
  height: 2530px;
  p {
    color: #a7a7a7;
    font-family: 'Pretendard';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export default Header;